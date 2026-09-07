import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsQuery = query(
      collection(db, "products"),
      orderBy("publishedAt", "desc")
    );

    const unsubscribe = onSnapshot(productsQuery, (snapshot) => {
      const productsFromFirebase = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsFromFirebase);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="shop-section" id="shop">
      <div className="shop-container">
        <div className="shop-header">
          <p className="shop-badge">Free Resources</p>

          <h2>Free PDF Library</h2>

          <p>
            Download my free PDFs, guides, educational resources, and digital
            learning materials.
          </p>

          <a href="/shop" className="view-all-products-btn">
            View All Free PDFs
          </a>
        </div>

        {products.length === 0 ? (
          <div className="shop-empty">
            <h3>No PDFs yet</h3>
            <p>Free PDFs and resources will be available soon.</p>
          </div>
        ) : (
          <div className="shop-grid">
            {products.map((product) => (
              <article className="shop-card" key={product.id}>
                <div className="shop-image">
                  <img src={product.image} alt={product.title} />
                  <span>Free</span>
                </div>

                <div className="shop-body">
                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <a
                    href={product.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shop-buy-btn"
                  >
                    Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;