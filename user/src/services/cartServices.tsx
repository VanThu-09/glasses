export const updateCartItemQtt = async (data :any) => {
    try {
        const res = await fetch("https://glassmanagement.vercel.app/api/cart/update", {
            credentials:"include",
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        return res
    } catch (error) {
        console.error("Lỗi khi update cartitem quantity", error)
    }
}