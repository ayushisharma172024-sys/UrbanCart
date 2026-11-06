import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import ImageGallery from '../../components/product/ImageGallery';
import ProductInfo from '../../components/product/ProductInfo';
import VariantSelector from '../../components/product/VariantSelector';
import PincodeChecker from '../../components/product/PincodeChecker';
import HighlightsGrid from '../../components/product/HighlightsGrid';
import StickyBottomBar from '../../components/product/StickyBottomBar';
import { PRODUCTS } from '../../data/mockData';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [selectedColor, setSelectedColor] = useState(
    product.colorways ? product.colorways[0] : null
  );
  const [selectedEdition, setSelectedEdition] = useState(
    product.editions ? product.editions[0] : null
  );
  const [activeSpecsTab, setActiveSpecsTab] = useState(false);

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header title="Product Details" showBack />

      <main className="w-full flex-1 bg-surface pt-20 pb-32">
        <div className="flex flex-col w-full">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="px-margin py-space-sm flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-2xl mx-auto w-full text-xs"
          >
            <Link to="/" className="text-on-surface-variant hover:text-primary whitespace-nowrap">
              Home
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <Link to="/catalog" className="text-on-surface-variant hover:text-primary whitespace-nowrap">
              {product.categoryLabel}
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-on-surface font-semibold truncate max-w-[150px]">
              {product.title}
            </span>
          </nav>

          {/* Image Gallery */}
          <ImageGallery images={product.images} productId={product.id} />

          {/* Vital Data Block */}
          <ProductInfo product={product} activeEditionPrice={selectedEdition?.price} />

          {/* Variant Selectors (Color & Audio Edition) */}
          <VariantSelector
            colorways={product.colorways}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            editions={product.editions}
            selectedEdition={selectedEdition}
            onSelectEdition={setSelectedEdition}
          />

          {/* Delivery Pincode Checker */}
          <PincodeChecker />

          {/* Highlights Grid */}
          <HighlightsGrid highlights={product.highlights} />

          {/* Technical Specifications Accordion */}
          <section className="px-margin pt-space-md max-w-2xl mx-auto w-full">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setActiveSpecsTab(!activeSpecsTab)}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    tune
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[16px]">
                    Technical Specifications
                  </h3>
                </div>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                    activeSpecsTab ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </div>

              {activeSpecsTab && (
                <div className="mt-space-md pt-space-sm border-t border-surface-container space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-surface-container/50">
                    <span className="text-outline">Acoustic Driver</span>
                    <span className="font-semibold text-on-surface">40mm Custom Beryllium</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container/50">
                    <span className="text-outline">Noise Cancellation</span>
                    <span className="font-semibold text-on-surface">Hybrid Active (-42dB)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container/50">
                    <span className="text-outline">Battery Playtime</span>
                    <span className="font-semibold text-on-surface">45 Hours (ANC Off) / 38 Hours (ANC On)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container/50">
                    <span className="text-outline">Bluetooth Codecs</span>
                    <span className="font-semibold text-on-surface">LDAC, AAC, aptX Adaptive</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-outline">Chassis Material</span>
                    <span className="font-semibold text-on-surface">Anodized Aluminum & Memory Foam</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Customer Reviews Breakdown Section */}
          <section id="reviews-section" className="px-margin pt-space-lg max-w-2xl mx-auto w-full">
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between mb-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Verified Customer Reviews
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Based on 1,842 global verified owners
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary-container justify-end">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-headline-sm text-lg font-bold text-on-surface">4.9</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-outline">98% Recommendation</span>
                </div>
              </div>

              {/* Rating Bars */}
              <div className="space-y-1.5 pt-2 border-t border-surface-container">
                {[
                  { star: 5, pct: '92%' },
                  { star: 4, pct: '6%' },
                  { star: 3, pct: '1%' },
                  { star: 2, pct: '0%' },
                  { star: 1, pct: '1%' },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-2 text-xs">
                    <span className="w-6 text-outline font-medium">{row.star}★</span>
                    <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-container rounded-full"
                        style={{ width: row.pct }}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-outline">{row.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Bottom Bar for Purchase Actions */}
      <StickyBottomBar
        product={product}
        selectedEdition={selectedEdition}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default ProductDetailsPage;

