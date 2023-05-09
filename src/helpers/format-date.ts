export const formatDate = (date: Date = new Date()): string | undefined => {
    if(typeof date==='string') return;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
