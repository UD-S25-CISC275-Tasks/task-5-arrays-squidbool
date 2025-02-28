/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }

    let lastInd: number = numbers.length - 1;
    let firstLastNum: number[] = [numbers[0], numbers[lastInd]];
    return firstLastNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let numbersTripled: number[] = numbers.map((num: number): number => num * 3);
    return numbersTripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(strNumbers: string[]): number[] {
    let numbers: number[] = strNumbers.map((strNum:string): number => {
        let num: number = parseInt(strNum);
        if (Number.isNaN(num)) {
            return 0;
        } else {
            return num;
        }
    });
    return numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let amountsClone: string[] = [...amounts];
    let numAmounts: number[] = amountsClone.map((strNum: string): number => {
        if (strNum.startsWith('$')) {
            strNum = strNum.slice(1);
        }

        let num: number = Number(strNum);
        
        if (Number.isNaN(num)) {
            return 0;
        } else {
            return num;
        }
    });
    return numAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let editedMessages: string[] = messages.filter((message: string): boolean => {
        if (message.endsWith('?')) {
            return false;
        }
        
        return true;
        
    })

    editedMessages = editedMessages.map((message: string): string => {
        if (message.endsWith('!')) {
            message = message.toUpperCase();
        }

        return message;
    })
    return editedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let lessThanFourWords: string[] = words.filter((word: string): boolean => word.length < 4);

    return lessThanFourWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    return colors.every((color: string): boolean => color === "red" || color === "blue" || color === "green");
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    let sum: number = addends.reduce((currentTotal: number, num: number) => currentTotal + num, 0);
    let strRep: string = `${sum}=`;

    strRep = strRep + addends.join('+');
    return strRep;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negativeValues: number[] = values.filter((val: number): boolean => val < 0);
    
    if (negativeValues.length === 0) {
        let sum: number = values.reduce((countTotal: number, val: number) => countTotal + val, 0);
        return [...values, sum];
    }

    let firstNegInd: number = values.indexOf(negativeValues[0]);
    let copiedValues: number[] = [...values];
    let sumBeforeFirstNeg: number = values.slice(0, firstNegInd).reduce((countTotal: number, val: number) => countTotal + val, 0);
    copiedValues.splice(firstNegInd+1, 0, sumBeforeFirstNeg);

    return copiedValues;
}
