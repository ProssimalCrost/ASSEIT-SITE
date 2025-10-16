interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {title && (
        <h2 className="text-3xl font-bold text-center text-white drop-shadow mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
