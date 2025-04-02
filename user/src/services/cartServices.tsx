
const host = "https://glassmanagement.vercel.app"
export const updateCartItemQtt = async (data :any) => {
    try {
        const res = await fetch("http://localhost:8000/api/cart/update", {
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

export const paymentProduct = async (dataList:any, amount:number, redirectUrl:string) => {
    try {
        const res = await fetch("http://localhost:8000/api/payment/cash",  {
            credentials:"include",
            method: "POST",
            body: JSON.stringify({
                dataList, amount,redirectUrl
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        return res
    } catch (error) {
        console.error("Lỗi khi thanh toán", error)
    }
}