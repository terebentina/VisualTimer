declare module 'VisualTimerTS' {
    class VisualTimer {
        reset: void;
        setTime: (seconds: number) => void;
        start: void;
        stop: void;
        pause: void;
        resume: void;
        remainingTime: number;
        hasFinished: boolean;
        constructor(opts: IVisualTimerOpts);
    }
    interface IVisualTimerOpts {
        type: string;
        key: string;
        game: any;
        onComplete: void;
        x: number;
        y: number;
        context: any;
        seconds: number;
    }
}
