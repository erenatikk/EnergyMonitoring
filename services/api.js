const API_BASE_URL = 'http://127.0.0.1:8000/api'; 

// Kullanıcı CRUD Fonksiyonları

// Kullanıcı Oluşturma
export async function createUser(userData) {
    const response = await fetch(`${API_BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

// Kullanıcı Listeleme
export async function fetchUsers() {
    const response = await fetch(`${API_BASE_URL}/users/list/`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

// Kullanıcı Güncelleme
export async function updateUser(userId, userData) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

// Kullanıcı Silme
export async function deleteUser(userId) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.ok;
}

// Tesis CRUD Fonksiyonları

// Tesis Oluşturma
export async function createPlace(placeData) {
    const response = await fetch(`${API_BASE_URL}/places/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(placeData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

// Tesis Listeleme
export async function fetchPlaces() {
    const response = await fetch(`${API_BASE_URL}/places/list/`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

// Tesis Güncelleme
export async function updatePlace(placeId, placeData) {
    const response = await fetch(`${API_BASE_URL}/places/${placeId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(placeData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

// Tesis Silme
export async function deletePlace(placeId) {
    const response = await fetch(`${API_BASE_URL}/places/${placeId}/`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.ok;
}

export async function createEnergyMeter(meterData) {
    const response = await fetch(`${API_BASE_URL}/energymeters/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meterData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

