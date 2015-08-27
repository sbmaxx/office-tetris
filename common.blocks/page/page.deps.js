({
    mustDeps: [{ block: 'polymer-gestures'}],
    shouldDeps: [
        {
            block: 'i-bem',
            elem: 'dom',
            mods: { 'init': 'auto' }
        },
        { block: 'icons' },
        { block: 'room-object' },
        { block: 'room' },
        { block: 'functions', elems: ['debounce', 'throttle'] }
    ]
})
