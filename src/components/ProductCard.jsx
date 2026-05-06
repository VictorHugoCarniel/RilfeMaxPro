import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ produto, onAdd }) {
  const { id, name, marca, price, originalPrice, discount, imageUrl } = produto;

  return (
    <section className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <Link to={`/productDesc/${id}`} className="text-decoration-none">
          <div
            className="position-relative"
            style={{
              height: '350px',
              overflow: 'hidden',
              backgroundColor: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {discount && (
              <span
                className="position-absolute bg-white fw-bold badgeDesc"
                style={{
                  top: '10px',
                  right: '10px',
                  zIndex: 10,
                  fontSize: '14px',
                  border: '2px solid #dc3545',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  color: '#198754'
                }}
              > -{discount}%
              </span>
            )}

            <img
              src={`/images/${imageUrl}`}
              alt={name}
              title={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '8px'
              }}
            />
          </div>
        </Link>

        <div className="card-body d-flex flex-column p-4">
          <h5 className="card-title fw-bold mb-2">{name}</h5>
          <p className="card-text text-muted mb-3">{marca}</p>

          <div className="mb-3">
            {originalPrice ? (
              <>
                <p className="text-muted text-decoration-line-through mb-1" style={{ fontSize: '0.95rem' }}>
                  De: {originalPrice}
                </p>
                <p className="fw-bold fs-4 text-success mb-0">
                  Por: {price}
                </p>
              </>
            ) : (
              <p className="fw-bold fs-4 text-primary mb-0">{price}</p>
            )}
          </div>

          <div className="mt-auto">
            <button
              className="btn btn-dark w-100 py-2"
              onClick={() => onAdd(produto)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;