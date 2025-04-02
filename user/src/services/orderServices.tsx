export const createOrder = async (customer_id: string | number, customer_name: string, customer_email: string,customer_phone: number| string, customer_address: string, shipping_cost: number, shipping_method: string, payment_method:string, note:string )=> {
    try {
        const response = await fetch('https://glassmanagement.vercel.app/api/order/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:"include",
            body: JSON.stringify({customer_id, customer_address, customer_email, customer_name, customer_phone, shipping_cost, shipping_method, payment_method, note})
        });
    
        return response
    } catch (error) {
        console.log("Lỗi khi tạo đơn hàng: " , error)
    }


} 


export const getOrder = async (userId: string|number, status:string) => {
    try {
        const response = await fetch('https://glassmanagement.vercel.app/api/order/get', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userId, status}),
            credentials: "include"
        });
        return response
    } catch (error) {
        console.error("Lỗi khi lấy order", error)
    }
}

export const cancelOrder = async(orderId: string | number) => {
    try {
        const res = fetch("https://glassmanagement.vercel.app/api/order/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId: orderId,  // ID của đơn hàng
                status: "cancelled"  // Trạng thái mới (pending, confirmed, cancelled, etc.)
            }),credentials:"include"
        })
        return res
    } catch (error) {
        console.log("Lỗi khi hủy đơn", error)
    }
}