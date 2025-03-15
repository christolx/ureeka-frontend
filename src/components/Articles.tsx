<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
{/*
>>>>>>> 8766f176bbcdc1ccf6f40652f83466f5c71260ba
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
*/}

<<<<<<< HEAD
const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden flex items-center max-w-7xl mx-auto rounded-2xl">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter text-[#3b463b] max-w-xl font-regular select-none">
          <span className="text-[#D1913C] font-serif text-5xl">Latest</span> articles:
          </h4>
          <Button onClick={() => navigate('/articles-page')} className="gap-4 bg-[#ffffff] hover:bg-[#E99C00] border border-black text-black transition-all duration-150 cursor-pointer">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
=======
export const Articles = () => (
  <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden flex items-center max-w-7xl mx-auto rounded-2xl">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter text-[#3b463b] max-w-xl font-regular select-none">
        <span className="text-[#D1913C] font-serif text-5xl">RELEVANT</span> ARTICLES :
        </h4>
        {/*
        <Button className="gap-4 bg-[#ffffff] hover:bg-[#E99C00] border border-black text-black transition-all duration-150 cursor-pointer">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
        */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
          <a href="https://news.detik.com/foto-news/d-6320178/donasi-makanan-untuk-anak-anak-jalanan-di-jakarta" target="_blank">
            <div className="mb-4">
              <img className="rounded-md aspect-video" src="/images/donasi-makanan-untuk-anak-anak-jalan-di-jakarta_169.jpeg" />
            </div>
            <h3 className="text-xl tracking-tight">Donasi Makanan Untuk Anak-Anak Jalanan di Jakarta</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-3 overflow-hidden line-clamp-4 text-ellipsis">
              Lebih dari 1 ton makanan disumbangkan untuk anak-anak jalanan di Jakarta. Kegiatan ini bagian dari program "More Sunstainability Actions, Less Waste"
            </p>
          </a>
>>>>>>> 8766f176bbcdc1ccf6f40652f83466f5c71260ba
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <a href="https://news.detik.com/foto-news/d-6320178/donasi-makanan-untuk-anak-anak-jalanan-di-jakarta" target="_blank">
              <div className="mb-4">
                <img className="rounded-md aspect-video" src="/images/donasi-makanan-untuk-anak-anak-jalan-di-jakarta_169.jpeg" />
              </div>
              <h3 className="text-xl tracking-tight">Donasi Makanan Untuk Anak-Anak Jalanan di Jakarta</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-3 overflow-hidden line-clamp-4 text-ellipsis">
                Lebih dari 1 ton makanan disumbangkan untuk anak-anak jalanan di Jakarta. Kegiatan ini bagian dari program "More Sunstainability Actions, Less Waste"
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <a href="https://food.detik.com/info-kuliner/d-5337202/5-makanan-ini-cocok-untuk-sumbangan-korban-bencana-alam" target="_blank">
              <div className="mb-4">
                <img className="rounded-md aspect-video" src="/images/5-makanan-ini-cocok-untuk-sumbangan-korban-bencana-alam-2.jpeg" />
              </div>
              <h3 className="text-xl tracking-tight">5 Makanan Ini Cocok Untuk Sumbangan Korban Bencana Alam</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-3 overflow-hidden line-clamp-4 text-ellipsis">
                Bencana alam yang melanda beberapa daerah di Indonesia membuat ratusan masyarakat membutuhkan bantuan. Termasuk bantuan makanan yang jadi kebutuhan utama.
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <a href="https://food.detik.com/info-kuliner/d-7662706/mulia-restoran-ini-beri-makan-gratis-untuk-4-000-orang" target="_blank">
              <div className="mb-4">
                <img className="rounded-md aspect-video" src="/images/makanan-gratis-untuk-4000-orang.webp" />
              </div>
              <h3 className="text-xl tracking-tight">Mulia! Restoran Ini Beri Makan Gratis Untuk 4.000 Orang</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-3 overflow-hidden line-clamp-4 text-ellipsis">
                Tak hanya mencari keuntungan, restoran ini juga bantu banyak orang membutuhkan. Ada program makan gratis untuk 4.000 orang yang dilakukan hingga tahun depan.
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-150">
            <a href="https://www.rri.co.id/purwokerto/ramadan/1373192/donasi-ke-dapur-umum-alternatif-amal-di-bulan-suci" target="_blank">
              <div className="mb-4">
                <img className="rounded-md aspect-video" src="/images/ht2d2di0nr22ofp.jpeg" />
              </div>
              <h3 className="text-xl tracking-tight">Donasi ke Dapur Umum, Alternatif Amal di Bulan Suci</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-3 overflow-hidden line-clamp-4 text-ellipsis">
                Ramadan merupakan momen yang tepat untuk berbagi dan menambah pahala. Inilah yang membuat Ramadan menjadi bulan yang istimewa untuk umat islam di dunia.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Articles;