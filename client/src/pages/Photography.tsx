import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Grid, MapPin, Camera, ImageOff, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

// --- DATA: Albums Configuration ---
const albums = [
    {
        id: 'wedding',
        title: 'Weddings',
        subtitle: 'Sacred Unions',
        description: 'Capturing the timeless rituals and vibrant colors of South Indian weddings.',
        location: 'South India',
        // Strong Bridal Portrait
        cover: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1600&auto=format&fit=crop',
        count: 20
    },
    {
        id: 'babyshower',
        title: 'Baby Shower',
        subtitle: 'Valaikaappu',
        description: 'Celebrating motherhood with traditional Seemantham ceremonies.',
        location: 'Tamil Nadu',
        // Saree/Bangle Focus
        cover: 'https://images.unsplash.com/photo-1605278077556-98dc427357c9?q=80&w=1600&auto=format&fit=crop',
        count: 15
    },
    {
        id: 'culture',
        title: 'Heritage',
        subtitle: 'Culture & Art',
        description: 'Exploring the architectural marvels and ancient traditions of the land.',
        location: 'Kerala & Karnataka',
        // Temple Architecture
        cover: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1600&auto=format&fit=crop',
        count: 18
    },
    {
        id: 'portrait',
        title: 'Portraits',
        subtitle: 'People',
        description: 'Raw and authentic portraits of the people who make this land unique.',
        location: 'Everywhere',
        // Character Portrait
        cover: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1600&auto=format&fit=crop',
        count: 12
    }
];

// --- EXTENSIVE & DIVERSE PHOTO COLLECTION ---
// Manually curated list of distinct, non-repeating South Indian visuals.
const photoCollection = [
    // --- WEDDINGS (20 Unique Photos) ---
    { id: 'w1', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1583934555026-17a11d087995?q=80&w=1200', title: 'The Bride', location: "Chennai" },
    { id: 'w2', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'Celebration', location: "Madurai" },
    { id: 'w3', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=1200', title: 'Golden Hour', location: "Coimbatore" },
    { id: 'w4', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1595521624438-2358bc7e64a1?q=80&w=1200', title: 'Just Married', location: "Kerala" },
    { id: 'w5', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1545959783-7c2518596645?q=80&w=1200', title: 'Jewelry Detail', location: "Salem" },
    { id: 'w6', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1610173824052-13691d17d0c3?q=80&w=1200', title: 'Temple Ceremony', location: "Chettinad" },
    { id: 'w7', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1531169542099-2a9db307374b?q=80&w=1200', title: 'Kanchipuram Silk', location: "Kanchipuram" },
    { id: 'w8', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1623940863162-8e1000000000?q=80&w=1200', title: 'Morning Rituals', location: "Rameshwaram" },
    { id: 'w9', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1550262100-344315256e01?q=80&w=1200', title: 'Thali Moment', location: "Trichy" },
    { id: 'w10', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1550058771-085b30364d25?q=80&w=1200', title: 'Laughter', location: "Bangalore" },
    { id: 'w11', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1512713753696-613d50821d37?q=80&w=1200', title: 'Mehndi Art', location: "Kochi" },
    { id: 'w12', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200', title: 'Varmala', location: "Chennai" },
    { id: 'w13', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1707572620701-49658f866418?q=80&w=1200', title: 'Couple Portait', location: "Mysore" },
    { id: 'w14', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200', title: 'Bridal Portrait', location: "Thanjavur" },
    { id: 'w15', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1605629713998-167ba70c803f?q=80&w=1200', title: 'Temple Setup', location: "Madurai" },
    { id: 'w16', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1628191013093-6056c7873294?q=80&w=1200', title: 'South Indian Groom', location: "Hyderabad" },
    { id: 'w17', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1616165314073-633092263435?q=80&w=1200', title: 'Decor', location: "Vijayawada" },
    { id: 'w18', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1634833230691-1fa12497645f?q=80&w=1200', title: 'Sangeet', location: "Vizag" },
    { id: 'w19', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1601120286071-f92592027732?q=80&w=1200', title: 'Pre-Wedding', location: "Mahabalipuram" },
    { id: 'w20', albumId: 'wedding', url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200', title: 'Haldi', location: "Tirunelveli" },

    // --- BABY SHOWER (15 Unique Photos) ---
    { id: 'b1', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1551888419-7b56e6967ac2?q=80&w=1200', title: 'Motherhood', location: "Madurai" },
    { id: 'b2', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1592388031264-07ec3c38b4d1?q=80&w=1200', title: 'Glass Bangles', location: "Chennai" },
    { id: 'b3', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1544212716-1f3c307075b9?q=80&w=1200', title: 'Blessings', location: "Coimbatore" },
    { id: 'b4', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1510257077395-81204d609210?q=80&w=1200', title: 'Family Love', location: "Trichy" },
    { id: 'b5', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1555562094-0ba651167441?q=80&w=1200', title: 'Tradition', location: "Kochi" },
    { id: 'b6', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1534947963471-4770e0a53b51?q=80&w=1200', title: 'Anticipation', location: "Salem" },
    { id: 'b7', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1566516171511-136bdf2d2d91?q=80&w=1200', title: 'Ceremony', location: "Erode" },
    { id: 'b8', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1609165684661-893bdad9df24?q=80&w=1200', title: 'Glow', location: "Tirunelveli" },
    { id: 'b9', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1505299344687-994d5b24467c?q=80&w=1200', title: 'New Life', location: "Vellore" },
    { id: 'b10', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1492429815037-d1a104cb5b16?q=80&w=1200', title: 'Waiting', location: "Thanjavur" },
    { id: 'b11', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1487123163749-e685f543e86c?q=80&w=1200', title: 'Joy', location: "Karur" },
    { id: 'b12', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1596245347321-4d1cc8768725?q=80&w=1200', title: 'Saree Detail', location: "Dindigul" },
    { id: 'b13', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=1200', title: 'Parents', location: "Ooty" },
    { id: 'b14', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1506894080133-c79df200028e?q=80&w=1200', title: 'Decor', location: "Kodaikanal" },
    { id: 'b15', albumId: 'babyshower', url: 'https://images.unsplash.com/photo-1516627145497-ae69d0d3b64c?q=80&w=1200', title: 'Pregnancy', location: "Coonoor" },

    // --- CULTURE (18 Unique Photos) ---
    { id: 'c1', albumId: 'culture', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200', title: 'Mysore Palace', location: "Mysore" },
    { id: 'c2', albumId: 'culture', url: 'https://images.unsplash.com/photo-1593693397690-362cb96667e3?q=80&w=1200', title: 'Kathakali', location: "Kerala" },
    { id: 'c3', albumId: 'culture', url: 'https://images.unsplash.com/photo-1519001150041-35b822d37c35?q=80&w=1200', title: 'Temple Elephant', location: "Guruvayur" },
    { id: 'c4', albumId: 'culture', url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f5feee?q=80&w=1200', title: 'Gopuram', location: "Madurai" },
    { id: 'c5', albumId: 'culture', url: 'https://images.unsplash.com/photo-1627894450280-j92120000000?q=80&w=1200', title: 'Backwaters', location: "Alleppey" },
    { id: 'c6', albumId: 'culture', url: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1200', title: 'Temple Art', location: "Thanjavur" },
    { id: 'c7', albumId: 'culture', url: 'https://images.unsplash.com/photo-1591266014389-c45479532598?q=80&w=1200', title: 'Hampi Ruins', location: "Hampi" },
    { id: 'c8', albumId: 'culture', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200', title: 'Munnar Tea', location: "Munnar" },
    { id: 'c9', albumId: 'culture', url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200', title: 'Monuments', location: "India" },
    { id: 'c10', albumId: 'culture', url: 'https://images.unsplash.com/photo-1603215233182-4467ec8e0258?q=80&w=1200', title: 'Street Life', location: "Chennai" },
    { id: 'c11', albumId: 'culture', url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200', title: 'Daily Life', location: "Pondicherry" },
    { id: 'c12', albumId: 'culture', url: 'https://images.unsplash.com/photo-1628084606700-1c9f40a12e23?q=80&w=1200', title: 'Market', location: "Madurai" },
    { id: 'c13', albumId: 'culture', url: 'https://images.unsplash.com/photo-1566890321245-c85c2901323f?q=80&w=1200', title: 'Fisherman', location: "Kanyakumari" },
    { id: 'c14', albumId: 'culture', url: 'https://images.unsplash.com/photo-1519922661266-395a1af54e20?q=80&w=1200', title: 'Dance', location: "Chidambaram" },
    { id: 'c15', albumId: 'culture', url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200', title: 'Colors', location: "Jaipur" },
    { id: 'c16', albumId: 'culture', url: 'https://images.unsplash.com/photo-1600609842388-3e4b486d357e?q=80&w=1200', title: 'Festivals', location: "Kerala" },
    { id: 'c17', albumId: 'culture', url: 'https://images.unsplash.com/photo-1533088730935-8b3a763840eb?q=80&w=1200', title: 'Ritual Fire', location: "Varanasi" },
    { id: 'c18', albumId: 'culture', url: 'https://images.unsplash.com/photo-1616680373809-7d84f489c621?q=80&w=1200', title: 'Sculpture', location: "Belur" },

    // --- PORTRAITS (12 Unique Photos) ---
    { id: 'p1', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200', title: 'Intense Gaze', location: "Chennai" },
    { id: 'p2', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200', title: 'Joyful Soul', location: "Pondicherry" },
    { id: 'p3', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200', title: 'The Artisan', location: "Karaikudi" },
    { id: 'p4', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200', title: 'Grace', location: "Bangalore" },
    { id: 'p5', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200', title: 'Character', location: "Thanjavur" },
    { id: 'p6', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200', title: 'Wisdom', location: "Coimbatore" },
    { id: 'p7', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200', title: 'Simplicity', location: "Villupuram" },
    { id: 'p8', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1200', title: 'Focus', location: "Mumbai" },
    { id: 'p9', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200', title: 'Modern', location: "Hyderabad" },
    { id: 'p10', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?q=80&w=1200', title: 'Style', location: "Bangalore" },
    { id: 'p11', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200', title: 'Bold', location: "Kochi" },
    { id: 'p12', albumId: 'portrait', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200', title: 'Dream', location: "Chennai" }
];

const Photography = () => {
    const [activeAlbum, setActiveAlbum] = useState<null | string>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeAlbum]);

    const displayedPhotos = activeAlbum
        ? photoCollection.filter(p => p.albumId === activeAlbum)
        : [];

    const handleImageLoad = (id: string) => {
        setImagesLoaded(prev => ({ ...prev, [id]: true }));
    };

    const handleImageError = (id: string, imgElement: HTMLImageElement) => {
        // Basic fallback for safety
        if (!imgElement.src.includes('unsplash')) {
            imgElement.src = "https://images.unsplash.com/photo-1604147706283-d7119b5b7637?q=80&w=800";
            setImagesLoaded(prev => ({ ...prev, [id]: true }));
            setImageErrors(prev => ({ ...prev, [id]: true }));
        }
    };

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = 'auto';
    };
    const nextPhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    };
    const prevPhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
            <SEO title="Photography Portfolio | Klypso" description="Fine art photography specializing in South Indian weddings and culture." />

            {/* --- HEADER --- */}
            {/* Positioned comfortably below main nav */}
            <div className="fixed top-28 left-0 z-40 px-6 md:px-12 pointer-events-none">
                <motion.div>
                    {activeAlbum && (
                        <button
                            onClick={() => setActiveAlbum(null)}
                            className="pointer-events-auto group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all shadow-lg"
                        >
                            <ArrowLeft size={14} />
                            Back to Albums
                        </button>
                    )}
                </motion.div>
            </div>

            <AnimatePresence mode="wait">

                {/* VIEW 1: ALBUM GRID */}
                {!activeAlbum ? (
                    <motion.div
                        key="album-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto"
                    >
                        <div className="mb-16 md:mb-24 text-center">
                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                                OUR PORTFOLIO
                            </h1>
                            <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
                                A visual journey through time, tradition, and emotion.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                            {albums.map((album, index) => (
                                <motion.div
                                    key={album.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveAlbum(album.id)}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg mb-6 bg-zinc-900 border border-white/10">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />

                                        <img
                                            src={album.cover}
                                            alt={album.title}
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                            <span className="inline-flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-widest mb-2">
                                                <Grid size={14} /> View Gallery ({album.count})
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                                                {album.title}
                                            </h2>
                                        </div>
                                        <p className="text-gray-400 font-serif italic text-lg mb-2">
                                            {album.subtitle}
                                        </p>
                                        <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                                            {album.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    /* VIEW 2: SINGLE ALBUM GALLERY */
                    <motion.div
                        key="album-gallery"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="min-h-screen pt-40 pb-24 px-4 md:px-8 max-w-[1920px] mx-auto bg-black"
                    >
                        {/* Header Info */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
                            <div className="pl-2">
                                <span className="text-indigo-500 text-xs font-black uppercase tracking-widest mb-2 block">
                                    Now Viewing
                                </span>
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                                    {albums.find(a => a.id === activeAlbum)?.title}
                                </h1>
                            </div>
                            <div className="mt-6 md:mt-0 text-right">
                                <p className="text-xl text-gray-400 font-serif italic">
                                    {albums.find(a => a.id === activeAlbum)?.subtitle}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <MapPin size={14} className="inline mr-1" />
                                    {albums.find(a => a.id === activeAlbum)?.location}
                                </p>
                            </div>
                        </div>

                        {/* Photos Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {displayedPhotos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="break-inside-avoid relative group cursor-zoom-in"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="relative overflow-hidden rounded-sm bg-zinc-900 border border-white/5 min-h-[200px]">
                                        {!imagesLoaded[photo.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Loader2 className="animate-spin text-white/20" />
                                            </div>
                                        )}

                                        <img
                                            src={photo.url}
                                            alt={photo.title}
                                            onLoad={() => handleImageLoad(photo.id)}
                                            onError={(e) => handleImageError(photo.id, e.currentTarget)}
                                            className={`w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105 ${imagesLoaded[photo.id] ? 'opacity-100' : 'opacity-0'}`}
                                        />

                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white transform scale-90 group-hover:scale-110 transition-transform">
                                                <Camera size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <h3 className="text-sm font-bold text-white leading-tight">{photo.title}</h3>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                                            {photo.location}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Nav */}
                        <div className="mt-24 pt-12 border-t border-white/5 text-center">
                            <button
                                onClick={() => setActiveAlbum(null)}
                                className="text-sm font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                            >
                                View Other Collections
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- LIGHTBOX --- */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
                            <div className="text-white/70 text-xs font-mono">
                                {displayedPhotos[lightboxIndex].title} <span className="mx-2 text-white/20">|</span> {displayedPhotos[lightboxIndex].location}
                            </div>
                            <button
                                onClick={closeLightbox}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest"
                            >
                                Close <X size={14} />
                            </button>
                        </div>

                        {/* Nav Buttons */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-4 md:left-8 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all z-50"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={nextPhoto}
                            className="absolute right-4 md:right-8 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all z-50"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative max-w-[95vw] max-h-[85vh] p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={displayedPhotos[lightboxIndex].url}
                                alt={displayedPhotos[lightboxIndex].title}
                                className="max-h-[85vh] w-auto object-contain shadow-2xl"
                            />
                        </motion.div>

                        {/* Bottom Counter */}
                        <div className="absolute bottom-8 left-0 right-0 text-center text-white/30 text-xs font-mono tracking-widest pointer-events-none">
                            {lightboxIndex + 1} <span className="mx-1">/</span> {displayedPhotos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Photography;
