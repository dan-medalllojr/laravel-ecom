export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | null;
    category: string;
    brand: string | null;
    stock: number;
    is_featured: boolean;
    in_new: boolean;
    slug: string;
}

export interface CartItem {
    id:number;
    product: Product;
    quantity: number;
}

export interface Order {
    id: number;
    name: string;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    shipping_address: string;
    subtotal: number;
    total: number;
    currency: string;
    status: 'pending' | 'paid' | 'failed' | 'cancelled';
    hitpay_payment_id: string | null;
    hitpay_request_payment_id: string | null;
    paid_at: string | null;
    items : OrderItem;
    created_at: string;
    updated_at: string;
}

export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    cart: CartItem[];
    flash:{
        success?: string;
        error?: string;
    }
};
