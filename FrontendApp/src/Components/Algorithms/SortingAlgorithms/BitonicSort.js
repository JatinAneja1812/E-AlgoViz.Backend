function compAndSwap(a, i, j, dir, order) {
    if ((a[i] > a[j] && dir === 1) || (a[i] < a[j] && dir === 0)) {
        // Swapping elements
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        order.push([i, j, a.slice(), dir]);
    }
}

function bitonicMerge(a, low, cnt, dir, order) {
    if (cnt > 1) {
        const k = parseInt(cnt / 2);
        for (let i = low; i < low + k; i++)
            compAndSwap(a, i, i + k, dir, order);
        bitonicMerge(a, low, k, dir, order);
        bitonicMerge(a, low + k, k, dir, order);
    }
}

function sort(a, low, cnt, dir, order) {
    if (cnt > 1) {
        const k = parseInt(cnt / 2);

        // sort in ascending order since dir here is 1
        sort(a, low, k, 1, order);

        // sort in descending order since dir here is 0
        sort(a, low + k, k, 0, order);

        // Will merge the whole sequence in ascending order
        // since dir=1.
        bitonicMerge(a, low, cnt, dir, order);
    }
}

export default function bitonicSort(arr) {
    const order = [];
    order.push([null, null, arr.slice(), null]); // Initial state of the array
    sort(arr, 0, arr.length, 1, order);

    // Perform the final swap to ensure the array is fully sorted
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                order.push([i, i + 1, arr.slice(), 1]);
                swapped = true;
            }
        }
    } while (swapped);

    for (let i = 0; i < arr.length; i++) {
        order.push([null, null, null, i]);
      }
    return order;
}