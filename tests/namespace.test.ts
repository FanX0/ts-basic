import {MathUtil} from "../src/math-util";

describe('namespace', () => {
    it('should must namespace', () => {
        console.info(MathUtil)
        console.info(MathUtil.PI)
        console.info(MathUtil.sum(1, 2))
    })
})