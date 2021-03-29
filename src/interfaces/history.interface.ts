export interface History {
    events: Array<Event>
}

export interface Event {
    type: string,
    payload: any,
    time: Date,
}