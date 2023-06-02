import { Link } from 'react-router-dom';
const product = {
   id: 1,
   title: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
   description:
      'Lenovo V15 G2 15.6 Laptop Computer - Black; Intel Core i5 11th Gen 1135G7 2.4GHz Processor; 16GB DDR4-3200 RAM; 1TB Solid State Drive; Intel Iris Xe Graphics',
   img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-card-50-compare-202209_GEO_VN?wid=480&hei=400&fmt=p-jpg&qlt=95&.v=1678777952357',
   category: 'laptop',
   brand: 'lenovo',
   price: '30.000.000',
   rating: '4.8/5',
};

function ProductDetail() {
   return (
      <div className="main">
         <section className="flex flex-col gap-16 py-10 bg-gray-100">
            <div className="container mx-auto flex justify-around  items-center w-[80%]">
               <div className="w-96 flex justify-end">
                  <img
                     src={product.img}
                     alt={product.title}
                     className="w-full select-none  border-gray-200 rounded-lg"
                  />
               </div>
               <div className="flex flex-col gap-3">
                  <p className="text-gray-500">
                     {'Home/'}
                     {<Link to="/product">product</Link>}
                     {`/${product.title}`}
                  </p>
                  <h2 className="text-4xl">{product.title.slice(0, 30)}</h2>
                  <span className="font-semibold">
                     Giá: <span className="text-2xl">{product.price} VND</span>
                  </span>
                  <span className="font-semibold">Thương hiệu: {product.brand}</span>
                  <div className="flex flex-col gap-2">
                     <h1 className="text-2xl">Tính năng</h1>
                     <p className="text-gray-800">{product.description.slice(0, 35)}</p>
                     <p className="text-gray-800">{product.description.slice(36, 70)}</p>
                     <p className="text-gray-800">{product.description.slice(71, 100)}</p>
                     <p className="text-gray-800">{product.description.slice(101, 130)}</p>
                     <p className="text-gray-800">{product.description.slice(131, 170)}</p>
                     <p className="text-gray-800">{product.description.slice(170, 201)}</p>
                  </div>
                  <h3 className="flex justify-between text-gray-700 text-lg">
                     <span>Danh mục: {product.category}</span>
                     <span>
                        Đánh giá: <span className="text-rose-500 font-bold">{product.rating.slice(0, 3)}</span>
                        <span>{product.rating.slice(3)}</span>
                     </span>
                  </h3>
                  <Link to="/cart">
                     <button className="bg-blue-800 w-full   text-white p-2 mt-6  border-gray-200 rounded-lg">
                        Thêm vào giỏ hàng
                     </button>
                  </Link>
               </div>
            </div>
            <Link to="/" className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none">
               &larr; Trở về sản phẩm
            </Link>
         </section>
      </div>
   );
}

export default ProductDetail;
