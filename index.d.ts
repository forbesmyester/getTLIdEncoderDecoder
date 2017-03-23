type TLId = string;
type Timestamp = number;

type getTLIdEncoderDecoder = (epoch: Timestamp, uniquenessPerMs: number) => {
    encode: (timestamp?: Timestamp) => TLId,
    decode: (tlId: TLId) => Timestamp,
    sort: (tlIdA: TLId, TlIdB: TLId) => number
}

declare var getTLIdEncoderDecoder: getTLIdEncoderDecoder;

declare module 'get_tlid_encoder_decoder' {
    export = getTLIdEncoderDecoder;
}
