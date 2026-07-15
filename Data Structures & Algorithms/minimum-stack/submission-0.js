class MinStack {
    constructor()
    {
        this.stack = []
    }
    

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) 
    {
        this.stack.push(val)
        console.log('push', this.stack)

    }

    /**
     * @return {void}
     */
    pop() 
    {
        this.stack.pop()
        console.log('pop', this.stack)
    }

    /**
     * @return {number}
     */
    top() 
    {
        console.log('top', this.stack[this.stack.length - 1])
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
getMin() {
    if (this.stack.length === 0) return null;

    let min = this.stack[0];
    for (let num of this.stack) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

}
