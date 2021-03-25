export interface History {
    events: Array<Event>
}

export interface Event {
    type: string,
    time: object
}