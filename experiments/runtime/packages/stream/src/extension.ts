import * as api from "@prague/api-definitions";
import { IDistributedObjectServices, ISequencedObjectMessage } from "@prague/runtime-definitions";
import { Stream } from "./stream";

export class StreamExtension implements api.ICollaborativeObjectExtension {
    public static Type = "https://graph.microsoft.com/types/stream";

    public type = StreamExtension.Type;

    public async load(
        document: api.IDocument,
        id: string,
        sequenceNumber: number,
        minimumSequenceNumber: number,
        messages: ISequencedObjectMessage[],
        services: IDistributedObjectServices,
        headerOrigin: string): Promise<api.ICollaborativeObject> {

        const stream = new Stream(document, id, sequenceNumber);
        await stream.load(sequenceNumber, minimumSequenceNumber, messages, headerOrigin, services);

        return stream;
    }

    public create(document: api.IDocument, id: string): api.ICollaborativeObject {
        const stream = new Stream(document, id, 0);
        stream.initializeLocal();

        return stream;
    }
}
