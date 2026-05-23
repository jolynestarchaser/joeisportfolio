import React, { useState } from "react";
import { useParams, Link } from "react-router-dom"; // 1. นำเข้า useParams และ Link
import MerchData from "../data/merch.json";

function ProductDetail() {
  const { id } = useParams(); // 2. ดึงค่า id มาจาก URL (เช่น กดมาเป็น /merchandise/3 ค่า id จะ = "3")

  // 3. ค้นหาสินค้าจาก JSON ที่มี id ตรงกับที่ส่งมา (ต้องแปลง id เป็นตัวเลขด้วย Number() หรือ parseInt())
  const product = MerchData.find((item) => item.id === Number(id));

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);

  // 4. ดักจับ Error: ถ้าคนพิมพ์ URL มั่วๆ แล้วหาสินค้าไม่เจอ ให้แสดงหน้านี้
  if (!product) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold uppercase">Product Not Found</h1>
        <Link to="/merchandise" className="underline hover:text-gray-500">
          Back to Shop
        </Link>
      </div>
    );
  }

  // ถ้าเจอสินค้า ก็แสดงผลตามปกติเลยครับ!
  return (
    <div className=" w-full max-w-[1440px] mx-auto px-4 md:px-10 py-10 font-sans text-black">
      {/* --- Breadcrumb --- */}
      <div className="text-xs uppercase tracking-widest mb-10 border-b border-black/10 pb-4">
        {/* ใช้ Link เพื่อให้กดกลับไปหน้ารวมสินค้าได้ */}
        <Link to="/merchandise" className="hover:text-gray-500">
          SHOP
        </Link>{" "}
        / {product.type} / {product.title}
      </div>

      <div className="flex flex-row md:flex-row gap-8 md:gap-16 relative items-start">
        {/* --- ฝั่งซ้าย: รูปภาพสินค้า --- */}
        <div className="w-full md:w-[55%] flex flex-row gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover bg-gray-100"
          />
        </div>

        {/* --- ฝั่งขวา: ข้อมูลสินค้า --- */}
        <div className="w-full md:w-[45%] flex flex-col md:sticky top-24 self-start">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
            {product.title}
          </h1>

          <div className="flex justify-between items-end mb-8">
            <p className="text-xl font-medium">${product.price}</p>
            {/* <p className="text-[10px] uppercase font-bold underline cursor-pointer">
              Shipping calculated at checkout.
            </p> */}
          </div>

          {/* ... (โค้ดส่วนเลือก Size, Quantity, ปุ่ม Add to Cart ยังคงเหมือนเดิมเป๊ะครับ) ... */}

          {/* เงื่อนไข: โชว์ส่วนนี้เฉพาะตอนที่ type เป็น "tshirt" เท่านั้น */}
          {product.type === "tshirt" && (
            <div className="mb-6">
              <p className="text-xs uppercase mb-2">Size</p>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-lg uppercase transition-colors ${
                      selectedSize === size
                        ? "text-black font-bold"
                        : "text-gray-400 hover:text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <p className="text-xs uppercase mb-2">Quantity</p>
            <div className="flex border border-black w-fit">
              <button
                className="px-4 py-2 text-lg hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <div className="px-4 py-2 text-lg bg-black text-white font-bold w-12 text-center">
                {quantity}
              </div>
              <button
                className="px-4 py-2 text-lg hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full border border-black py-4 uppercase font-bold text-sm hover:bg-black hover:text-white transition-colors">
              Add To Cart
            </button>
            <button className="w-full bg-black text-white py-4 uppercase font-bold text-sm hover:bg-white hover:text-black hover:border-black hover:border transition-colors  flex justify-center items-center gap-2">
              Pay with prompt pay
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-black">
            <details className="group border-b border-black" open>
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-xs uppercase">
                <span>Details</span>
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <div className="text-sm text-gray-600 pb-4 leading-relaxed">
                {product.description}
              </div>
            </details>

            {/* เงื่อนไข: โชว์ Size Chart เฉพาะตอนที่ type เป็น "tshirt" เท่านั้น */}
            {product.type === "tshirt" && (
              <details className="group border-b border-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-xs uppercase">
                  <span>Size Chart</span>
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <div className="text-xs text-black pb-4 flex flex-col gap-3">
                  <p>
                    <strong>Small:</strong>
                    <br />
                    body length: 24"
                  </p>
                  <p>
                    <strong>Medium:</strong>
                    <br />
                    body length: 24 1/2"
                  </p>
                </div>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
