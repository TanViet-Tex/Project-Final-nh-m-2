const brands = ["Atlantic","Diamond D","Jacques Lemans","Aries Gold","Epos","Q&Q"];

export default function Brands(){
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6 bg-white py-6 rounded shadow">
      <div className="flex gap-6 justify-between">
        {brands.map((b,i)=>(
          <div key={i} className="flex-1 text-center py-4 border rounded">{b}</div>
        ))}
      </div>
    </div>
  );
}
