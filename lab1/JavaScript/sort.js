const createSortArr = (formId) => {
    const elements = document.getElementById(formId);

    return [1, 2]
        .map(i => ({
            field: elements[`sort${i}`].value,
            direction: elements[`desc${i}`].checked ? -1 : 1
        }))
        .filter(level => level.field !== "none");
};

const sortTable = (data, sortArr) =>
    sortArr.length === 0 ? data : data.sort((a, b) =>
        sortArr.reduce((res, {field, direction}) => {
            if (res !== 0 || a[field] === b[field]) return res;

            const [valA, valB] = [a[field], b[field]];
            return (typeof valA === 'number'
                ? valA - valB
                : String(valA).localeCompare(String(valB))) * direction;
        }, 0)
    );