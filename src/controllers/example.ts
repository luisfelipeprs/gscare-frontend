import axios from 'axios';

// Attendants
const BASE_URL = 'https://api.example.com'; // Substitua pela URL da sua API

const handleRequestError = (error: any): never => {
    console.error('Erro na requisição:', error.response || error.message || error);
    throw error;
};

interface CreateItemRequest {
    name: string;
    description: string;
    price: number;
}

interface CreateItemResponse {
    id: string;
    name: string;
    description: string;
    price: number;
}

export const createItem = async (newItem: CreateItemRequest): Promise<CreateItemResponse> => {
    try {
        const response = await axios.post<CreateItemResponse>(`${BASE_URL}/items`, newItem);
        return response.data;
    } catch (error) {
        return handleRequestError(error);
    }
};

interface GetItemByIdResponse {
    id: string;
    name: string;
    description: string;
    price: number;
}

export const getItemById = async (itemId: string): Promise<GetItemByIdResponse> => {
    try {
        const response = await axios.get<GetItemByIdResponse>(`${BASE_URL}/items/${itemId}`);
        return response.data;
    } catch (error) {
        return handleRequestError(error);
    }
};

interface UpdateItemResponse {
    id: string;
    name: string;
    description: string;
    price: number;
}

export const updateItem = async (itemId: string, updatedItem: CreateItemRequest): Promise<UpdateItemResponse> => {
    try {
        const response = await axios.put<UpdateItemResponse>(`${BASE_URL}/items/${itemId}`, updatedItem);
        return response.data;
    } catch (error) {
        return handleRequestError(error);
    }
};

interface PartialUpdateItemResponse {
    id: string;
    name?: string;
    description?: string;
    price?: number;
}

export const partiallyUpdateItem = async (itemId: string, partialUpdate: Partial<CreateItemRequest>): Promise<PartialUpdateItemResponse> => {
    try {
        const response = await axios.patch<PartialUpdateItemResponse>(`${BASE_URL}/items/${itemId}`, partialUpdate);
        return response.data;
    } catch (error) {
        return handleRequestError(error);
    }
};

export const deleteItem = async (itemId: string): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/items/${itemId}`);
    } catch (error) {
        return handleRequestError(error);
    }
};

(async () => {
    try {
        const newItem = await createItem({
            name: "Novo Item",
            description: "Descrição do novo item",
            price: 19.99
        });

        console.log('Novo item criado:', newItem);

        const itemId = newItem.id;
        const retrievedItem = await getItemById(itemId);

        console.log('Item obtido por ID:', retrievedItem);

        const updatedItem = await updateItem(itemId, {
            name: "Item Atualizado",
            description: "Nova descrição do item",
            price: 24.99
        });

        console.log('Item atualizado:', updatedItem);

        const partiallyUpdatedItem = await partiallyUpdateItem(itemId, {
            price: 29.99
        });

        console.log('Item parcialmente atualizado:', partiallyUpdatedItem);

        await deleteItem(itemId);

        console.log('Item excluído com sucesso.');
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
})();
