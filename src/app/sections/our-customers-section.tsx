export default function OurCustomersSection() {
  const customerLogos = [
    { name: "Chandrama Solutions", src: "/testimonial1.png" },
    { name: "Astronames", src: "/testimonial2.png" },
    { name: "Graph Detector", src: "/testimonial3.png" },
    { name: "Fabulato", src: "/testimonial4.png" },
  ];

  return (
    <section className="block py-20 px-6 bg-color-001 border-t border-color-002/5 max-md:py-14" id="customers">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 max-md:gap-8">
        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-3.5 max-w-xl">
          <h2 className="text-[2.75rem] md:text-[3.4rem] font-bold text-color-002 tracking-[-1.5px] leading-tight [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] max-md:text-[2rem] max-md:tracking-[-1px]">
            Our Customers
          </h2>
          <p className="text-color-002/75 text-base md:text-[1.05rem] leading-relaxed max-w-[490px] font-normal max-md:text-[0.9375rem]">
            From small businesses to global enterprises, Vectolift enables organizations of all kinds to speak human to their customers
          </p>
        </div>

        {/* Logos Grid — responsive with proper sizing */}
        <div className="grid grid-cols-4 items-center justify-items-center gap-8 pt-4 w-full max-md:grid-cols-2 max-md:gap-5">
          {customerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full px-3 py-4 rounded-xl bg-color-002/[0.03] border border-color-002/[0.06] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-color-002/10"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-9 md:h-11 w-auto object-contain max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
