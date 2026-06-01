import { useState } from 'react';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1000&q=80',
        title: 'Toronto'
    },
    {
        src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80',
        title: 'Canadian mountains'
    },
    {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
        title: 'Nature and travel'
    }
];

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const showNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentImage = images[currentIndex];

    return (
        <section className="gallery-section">
            <h2>Галерея зображень</h2>
            <p>
                Відображається одне велике зображення та кнопки перемикання.
            </p>

            <div className="gallery-card">
                <img src={currentImage.src} alt={currentImage.title} />

                <h3>{currentImage.title}</h3>

                <div className="gallery-buttons">
                    <button onClick={showPrev} disabled={currentIndex === 0}>
                        Попереднє
                    </button>

                    <span>
                        {currentIndex + 1} / {images.length}
                    </span>

                    <button onClick={showNext} disabled={currentIndex === images.length - 1}>
                        Наступне
                    </button>
                </div>
            </div>
        </section>
    );
}
