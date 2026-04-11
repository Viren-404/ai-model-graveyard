export default function TombstoneCard({ tool }: { tool: any }) {
  const stars = Array(5).fill(0).map((_, i) => i < tool.popularity ? "⭐" : "☆");

  return (
    <div className="group relative bg-grave-card border border-grave-border rounded-2xl p-6 hover:border-grave-green transition-all duration-300 hover:shadow-lg cursor-pointer">
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-grave-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{tool.logo}</div>
        <span className="text-xs font-body bg-grave-border text-grave-gray px-2 py-1 rounded-full">
          {tool.category}
        </span>
      </div>

      <h3 className="font-heading text-grave-white text-xl mb-1 group-hover:text-grave-green transition-colors">
        {tool.name}
      </h3>
      <p className="text-grave-gray text-sm font-body mb-3">{tool.company}</p>

      <div className="flex gap-4 mb-4 font-body text-sm">
        <div>
          <span className="text-grave-gray">Born: </span>
          <span className="text-grave-white">{tool.born}</span>
        </div>
        <div>
          <span className="text-grave-gray">Died: </span>
          <span className="text-red-400">{tool.died}</span>
        </div>
      </div>

      <div className="border-t border-grave-border mb-4" />

      <p className="text-grave-gray text-sm font-body mb-4 leading-relaxed">
        <span className="text-red-400 font-semibold">Cause: </span>
        {tool.causeOfDeath}
      </p>

      <p className="text-grave-green text-sm font-body italic mb-4 opacity-80">
        &ldquo;{tool.ripQuote}&rdquo;
      </p>

      <div className="flex items-center justify-between">
        <div className="text-sm">{stars.join("")}</div>
        <div className="flex gap-1 flex-wrap justify-end">
          {tool.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-body text-grave-purple bg-grave-border px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300 font-heading text-red-500 text-5xl font-black rotate-12 pointer-events-none">
        RIP
      </div>
    </div>
  );
}
