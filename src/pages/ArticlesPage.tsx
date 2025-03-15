import { Badge } from "@/components/ui/badge";

export const ArticlesPage = () => (
  <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden flex items-center max-w-7xl mx-auto rounded-2xl">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge variant="outline" className="border-[#3b463b]">Articles</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl text-[#3b463b] md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Articles For <span className="text-[#D1913C] font-serif text-5xl">You</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
                <img className="rounded-md aspect-video" src="/images/donasi-makanan-untuk-anak-anak-jalan-di-jakarta_169.jpeg" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://news.detik.com/foto-news/d-6320178/donasi-makanan-untuk-anak-anak-jalanan-di-jakarta" target="_blank">
              Donasi Makanan Untuk Anak-Anak Jalanan di Jakarta
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
            Lebih dari 1 ton makanan disumbangkan untuk anak-anak jalanan di Jakarta. Kegiatan ini bagian dari program "More Sustainability Actions, Less Waste"
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md aspect-video" src="/images/5-makanan-ini-cocok-untuk-sumbangan-korban-bencana-alam-2.jpeg" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://food.detik.com/info-kuliner/d-5337202/5-makanan-ini-cocok-untuk-sumbangan-korban-bencana-alam" target="_blank">
                5 Makanan Ini Cocok Untuk Sumbangan Korban Bencana Alam
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
            Bencana alam yang melanda beberapa daerah di Indonesia membuat ratusan masyarakat membutuhkan bantuan. Termasuk bantuan makanan yang jadi kebutuhan utama.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md aspect-video" src="/images/makanan-gratis-untuk-4000-orang.webp" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://food.detik.com/info-kuliner/d-7662706/mulia-restoran-ini-beri-makan-gratis-untuk-4-000-orang" target="_blank">  
                Mulia! Restoran Ini Beri Makan Gratis Untuk 4.000 Orang
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
            Tak hanya mencari keuntungan, restoran ini juga bantu banyak orang membutuhkan. Ada program makan gratis untuk 4.000 orang yang dilakukan hingga tahun depan.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md aspect-video" src="/images/ht2d2di0nr22ofp.jpeg" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://www.rri.co.id/purwokerto/ramadan/1373192/donasi-ke-dapur-umum-alternatif-amal-di-bulan-suci" target="_blank">
                Donasi ke Dapur Umum, Alternatif Amal di Bulan Suci
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
            Ramadan merupakan momen yang tepat untuk berbagi dan menambah pahala. Inilah yang membuat Ramadan menjadi bulan yang istimewa untuk umat islam di dunia.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md aspect-video" src="/images/tips-agar-makanan-tidak-terbuang.webp" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://www.liputan6.com/feeds/read/5844880/tips-agar-makanan-tidak-terbuang-panduan-lengkap-mengurangi-limbah-pangan" target="_blank">
                Tips Agar Makanan Tidak Terbuang: Panduan Lengkap Mengurangi Limbah Pangan
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
              Pelajari cara efektif mengurangi limbah makanan dengan tips praktis ini. Hemat uang dan lindungi lingkungan dengan menghindari pemborosan pangan.
            </p>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <img className="rounded-md aspect-video" src="/images/warga-berebut-makanan-buka-puasa-di-pemkab-blitar.jpeg" />
            </div>
            <h3 className="text-xl tracking-tight">
              <a href="https://www.detik.com/jatim/berita/d-7813751/ribuan-warga-berebut-takjil-dan-buka-bersama-gratis-di-pemkab-blitar" target="_blank">
                Ribuan Warga Berebut Takjil dan Buka Bersama Gratis di Pemkab Blitar
              </a>
            </h3>
            <p className="text-muted-foreground text-base">
            Ribuan warga Blitar berebut takjil dan makanan untuk berbuka puasa di halaman Kantor Bupati Blitar, Sabtu (8/3/2025). Sebanyak 20 ribu porsi takjil dan makanan berbagai menu telah disiapkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArticlesPage;