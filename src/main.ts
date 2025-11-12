import {v5} from 'uuid';

const MENTION_NAMESPACE_UUID = '019a768a-995f-768d-9bb2-eee17e46dc24';

export function mention_v5_from_text(name: string) : string {
    return "https://uri.dataeq.com/v1/" + v5(name, MENTION_NAMESPACE_UUID);
}