export interface ILoginState {
    token: string | null,    
    error: string | null,
    isSuccess: boolean,
    isLoading: boolean
}

export interface ILoginEmailPassword {
    email: string,
    password: string
}

export interface ILoginToken {
    token: string
}