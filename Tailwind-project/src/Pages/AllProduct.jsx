import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ AddtoCart }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  useEffect(() => {
    const getAllProductCategory = async () => {
      setLoading(true);
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setAllCategory(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllProductCategory();
  }, []);

  const filterProduct = (product) => {
    setSelectProduct(product);
  };

  useEffect(() => {
    const getAllProduct = async () => {
      if (selectProduct) {
        setLoading(true);
        try {
          const res = await axios(`https://dummyjson.com/products/category/${selectProduct}`);
          setAllProduct(res.data.products);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getAllProduct();
  }, [selectProduct]);

  useEffect(() => {
    const allItems = async () => {
      setLoading(true);
      try {
        const res = await axios('https://dummyjson.com/products');
        setAllItems(res.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    allItems();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product} });
  };

  return (
    <>
      <div className='text-center'>
        <select
          className='px-2 py-2 bg-black text-white mt-2 rounded-lg'
          onChange={(e) => filterProduct(e.target.value)}
        >
          <option value="">Select Product</option>
          {allCategory
            .filter((filteritem) => filteritem !== "vehicle")
            .map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
        </select>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            {loading ? (
              <div className="w-full text-center">
                <div className="loader border-t-4 border-b-4 border-gray-900 h-12 w-12 rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              (selectProduct ? allProduct : allItems).map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full border-4 cursor-pointer" onClick={() => handleProductClick(item)}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">${item.price}</h2>
                    <button className='px-3 py-2 bg-black text-sky-300 rounded-lg mt-2' onClick={(e) => { e.stopPropagation(); AddtoCart(item); }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
