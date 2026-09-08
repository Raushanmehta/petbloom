const fs = require('fs');
const data = require('./data/data.json');

data.blogData.blogDetailData = {
    title: "Why Regular Pet Grooming Is Essential for Your Pet's Health and Happiness",
    category: "PET CARE",
    author: "Jordan Park",
    date: "24 Jun, 2025",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
    introText: "Grooming isn't just about keeping your pet looking adorable — it's a vital part of their overall health and well-being. From preventing infections to reducing stress, regular grooming plays a big role in ensuring a longer, happier life for your furry friend.",
    sections: [
        {
            id: "1",
            number: "1.",
            title: "Grooming Prevents Skin and Coat Problems",
            content: "Dirt, debris, and loose fur can build up in your pet's coat and lead to matting, hot spots, and skin infections. Grooming removes these irritants and allows your pet's skin to breathe.",
            subheading: "Brushing regularly also helps:",
            bullets: [
                "Distribute natural oils throughout the coat",
                "Stimulate blood circulation",
                "Prevent painful mats, especially in long-haired breeds like Shih Tzus or Golden Retrievers"
            ],
            image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
            imagePosition: "right"
        },
        {
            id: "2",
            number: "2.",
            title: "Nail Trimming Is More Than Cosmetic",
            content: "Overgrown nails can cause pain, posture problems, and even joint issues in both dogs and cats. If your pet's nails \"click\" on the floor, it's a sign they need a trim. Adaptive reuse is a powerful approach to architecture that combines historical preservation with modern innovation.\n\nBy embracing this practice, architects can create unique and sustainable spaces that honor the past while looking to the future.",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
            imagePosition: "right"
        },
        {
            id: "3",
            number: "3.",
            title: "Ear Cleaning and Dental Hygiene Help Prevent Infections",
            content: "Just like humans, pets need regular care for their ears and teeth.",
            bullets: [
                "Dirty ears can lead to yeast or bacterial infections, especially in floppy-eared breeds like Cocker Spaniels.",
                "Neglected teeth can cause plaque buildup, gum disease, and bad breath."
            ],
            footerNote: "A grooming appointment is a great time to check ears and freshen up that smile!",
            quote: {
                text: "Pet grooming isn't just about appearances — it's an essential part of your pet's wellness. Regular grooming keeps your pet healthy, comfortable, and happy. Plus, it's a great way to bond and show your love.",
                author: "Michel Clarck"
            },
            image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=600",
            imagePosition: "bottom-banner"
        },
        {
            id: "4",
            number: "4.",
            title: "Grooming Reduces Stress and Builds Trust",
            content: "Repurposing existing structures is an environmentally sustainable practice, reducing the need for new construction and minimizing waste. Successfully adapting old buildings involves integrating modern amenities and technologies while respecting the building's historical integrity. This balance creates functional and aesthetically pleasing spaces.",
            images: [
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400"
            ],
            imagePosition: "split-right"
        },
        {
            id: "5",
            number: "5.",
            title: "A Freshly Groomed Pet A Happy Home",
            content: "Adaptive reuse is a powerful approach to architecture that combines historical preservation with modern innovation. By embracing this practice, architects can create unique and sustainable spaces that honor the past while looking to the future.\n\nReuse involves repurposing old buildings for new uses, preserving historical value while meeting modern needs. This post explores the benefits and challenges of adaptive reuse in architecture.",
            image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
            imagePosition: "full-bottom-image"
        }
    ]
};

fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 2));
