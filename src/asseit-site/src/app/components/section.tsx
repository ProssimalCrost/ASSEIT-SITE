interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {title && (
        <h2 className="text-3xl font-bold text-center text-black drop-shadow mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
//JCm#3795