import fs from 'fs';
import path from 'path';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseKey: string = process.env.SUPABASE_KEY!;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

const semuaTanggalRekaman = async () => {
  let { data: rekaman, error } = await supabase
    .from('rekaman')
    .select('tanggal')
  return rekaman
}

const cekTanggal = async (tanggal: string): Promise<boolean> => {
  try {
    const dataArray = await semuaTanggalRekaman();
    if (!dataArray) {
      throw new Error('Gagal mengambil data');
    }
    const tanggalArray: string[] = dataArray.map(item => item.tanggal);
    return tanggalArray.includes(tanggal);
  } catch (error) {
    console.error('Error:', error);
    return false; // Mengembalikan false jika ada error
  }
}




const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function addToSupabase(folderName: string, directory: string, lantai: string): Promise<void> {
  console.log('1')
  const { data, error } = await supabase
    .from('rekaman')
    .insert([{ lantai_id: lantai, kamera_id: 1, tanggal: new Date() }]);

  if (error) console.log('Error inserting data:', error);
  else console.log('Data added successfully:', data);
}

const processedFolders = new Set<string>();

function watchDirectory(directoryToWatch: string, lantai: string): void {
  fs.watch(directoryToWatch, { recursive: true }, (eventType, filename) => {
    if (eventType === 'rename' && filename) {
      const fullPath: string = path.join(directoryToWatch, filename);
      const uniqueKey = `${directoryToWatch}/${filename}`;

      if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory() && !processedFolders.has(uniqueKey)) {
        console.log(`Folder baru ditemukan: ${filename} in ${directoryToWatch}`);
        processedFolders.add(uniqueKey);

        cekTanggal(new Date()).then(result => {
          console.log(result);
          if (result == false) {
            addToSupabase(filename, directoryToWatch, lantai);
            console.log(`Folder ${filename} berhasil ditambahkan ke Supabase`);
          }
        });
      }
    }
  });
}


export default defineEventHandler(async (event) => {

  const directory1: string = path.join(rootDir, '..', 'public', 'hls', '1');
  const directory2: string = path.join(rootDir, '..', 'public', 'hls', '2');

  watchDirectory(directory1, 2);
  watchDirectory(directory2, 3);

})
