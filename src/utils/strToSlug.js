export default function strToSlug(str) {
    const slug = str
        .replace(/<[^>]*>/g, '') // Remove html tag
        .normalize('NFKD') // Convert signed characters into unsigned
        .replace(/[\u0300-\u036F]/g, '') // Convert signed characters into unsigned
        .replace(/[^\w\s-]/g, '') //Remove special characters
        .toLowerCase()
        .trim()
        .replace(/-+/g, '')
        .replace(/\s+/g, '-');

    return slug;
}
