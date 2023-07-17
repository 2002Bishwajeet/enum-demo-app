import { Client, Account, Avatars, CreditCard } from 'appwrite';



const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('test-2');


const account = new Account(client);
const avatar = new Avatars(client);


export async function getAccount() {
    return await account.get();
}

export function signInWithOAuth2(provider: string) {
    account.createOAuth2Session(provider, window.location.href, window.location.href);
}

export function getAmexCard() {
    return avatar.getCreditCard(CreditCard.Amex);
}

export function getVisaCard() {
    return avatar.getCreditCard(CreditCard.Visa);
}


