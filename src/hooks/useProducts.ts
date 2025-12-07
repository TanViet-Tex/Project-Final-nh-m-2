// src/hooks/useProducts.ts

import { useState, useEffect } from 'react';
// Import các hàm service đã tạo
import { getAllProducts, getUnsplashWatchPhotos } from '../services';
// Import các kiểu dữ liệu đã tạo
import type { ProductWithImage, Product } from '../types';

export const useProducts = () => { // <--- Phải là export const!
    const [products, setProducts] = useState<ProductWithImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 1. Lấy dữ liệu sản phẩm giả lập
                const productList: Product[] = await getAllProducts();

                // 2. Lấy ảnh đồng hồ từ Unsplash
                const photos = await getUnsplashWatchPhotos('classic watch, luxury watch', productList.length);

                // 3. Gán ảnh vào từng sản phẩm
                const productsWithImages: ProductWithImage[] = productList.map((product, index) => {
                    // Dùng ảnh 'regular' hoặc ảnh placeholder nếu API không trả về
                    const imageUrl = photos[index]?.urls.regular || '/default-watch-placeholder.svg'; 
                    return {
                        ...product,
                        imageUrl: imageUrl, // Thêm trường imageUrl
                    } as ProductWithImage;
                });

                setProducts(productsWithImages);
                setLoading(false);

            } catch (err) {
                setError('Failed to fetch products or images.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // ⚠️ Đảm bảo hàm này được EXPORT để Home.tsx có thể import
    return { products, loading, error }; 
};
// ----------------------------------------------------------------
// Hoặc sử dụng export default:
// export default useProducts; 
// Nhưng với cấu trúc import { useProducts } from '...', cách trên là đúng.
// ----------------------------------------------------------------