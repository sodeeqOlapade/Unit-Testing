// axios.get = jest.fn(() =>
//       Promise.resolve({
//         data: [
//           {
//             id: 179708955,
//             node_id: "MDEwOlJlcG9zaXRvcnkxNzk3MDg5NTU=",
//             name: "learnMarkdown",
//             full_name: "sodeeqOlapade/learnMarkdown"
//           },

//           {
//             id: 179708955,
//             node_id: "MDEwOlJlcG9zaXRvcnkxNzk3MDg5NTU=",
//             name: "learnMarkdown",
//             full_name: "sodeeqOlapade/learnMarkdown"
//           }
//         ]
//       })
//     );
const mockGet = {
    get:
        jest.fn(() => Promise.resolve({data:[{name: "57"}, {name: "decafreelance"}]}))
  };
  module.exports = mockGet;