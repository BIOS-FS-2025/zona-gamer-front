// function StatCard(props) {
//   const number = props.number;
//   const label = props.label;
//   return (
//     <div>
//       <span>{number}</span>
//       <span>{label}</span>
//     </div>
//   )
// }

function StatCard({ number, label, index }) {
  return (
    <div className={`text-center p-6 rounded-xl border border-primary/20 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hove:border-primary hover:shadow-lg hover:shadow-primary/30 animate-fadeInUp`} 
    style={{ animationDelay: `${index * 0.2}s`}}>
      <span className="block text-3xl md:text-4xl font-black text-primary font-mono">{number}</span>
      <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">{label}</span>
    </div>
  );
}

export default StatCard;
