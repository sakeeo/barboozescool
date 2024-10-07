const galleryImages = [
    { src: '/images/gallery/gallery1.jpg', alt: 'Image 1' },
    { src: '/images/gallery/gallery2.jpg', alt: 'Image 2' },
    { src: '/images/gallery/gallery3.jpg', alt: 'Image 3' },
    { src: '/images/gallery/gallery4.jpg', alt: 'Image 4' },
    { src: '/images/gallery/gallery5.jpg', alt: 'Image 5' },
    { src: '/images/gallery/gallery6.jpg', alt: 'Image 6' }
];


export default function (){
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h2>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}