import React from "react";
import PropTypes from "prop-types";
import InspireTree from "inspire-tree";
import { isEqual } from "lodash";
import TreeDom from "./dom";
// import 'inspire-tree-dom/dist/inspire-tree-light.css';


let bolts = [{"text":"Bolt-2343", itree:{
  state:{
    checked:true
  }
}},{"text":"Bolt-9999"}]

class Tree extends React.Component {
  static propTypes = {
    // data: PropTypes.array,
    config: PropTypes.object,
    className: PropTypes.string,
  };

  constructor() {
    super();

    this.createInstance = this.createInstance.bind(this);
  }

  load = () =>{
    console.log(this.Instance)
    // var node = this.Instance.get(1).get(2).get(0)
    var node = this.Instance.get(1)
    console.log(node)
    var chil = node.getChildren()[2]
    console.log(chil)
    var bolt = chil.getChildren()[0]
    console.log(bolt)

    // 이걸로 ???
    bolt.reload();
    bolt.expand();
    // 고의 적 인보크 .... 
    // data 함수의 , 
    // 어떻게 특정 노드를 특정할것인가 ?
    //bolt.loadChildren()
  }

  createInstance(params = {}) {
    let { data, config, columns } = this.props;
    if (params.data) data = params.data;
    if (params.config) config = params.config;
    if (params.columns) columns = params.columns;

    // this.Instance = new InspireTree({
    //   data: data, selection: {
    //     mode: 'checkbox'
    //   },
    // });

    this.Instance = new InspireTree({
      data: (node, resolve, reject) => {
        console.log(node);
        var id = node ? node.id : "root";
        console.log(id);
        // if (node.children === true) {
        //   return resolve([{ text: "test", children: true }]);
        // }

        let tmp = data;
        if(node){

          if(node.text ==="SceneTest"){
            // scene 의 부재명으로 찾아오고 , 
            // mesh 에대한 레퍼런스를 가지지말고 , uuid 에 대한 값만 가져가자 ...
            tmp = [{"text":"Bolt" , children:true}, {"text":"Line"}]
          }

          if(node.text ==="Bolt"){
            bolts.push({"text":"hihihihi"})
            tmp = bolts;
          }

          // 처음에 이니셜 데이터를 자동으로 만들고 ,
          // 그후엔 scene.getObjectByName 아니면
          // scene["Bolt"]
          // scene[node.text] 이런식으로 가져오기 .

        }
        return resolve(tmp);
      },
      // deferredLoading: true,
      selection: {
        mode: "checkbox",
      },
    });

    new TreeDom(this.Instance, {
      target: this.treeNode,
      columns,
      ...config,
      showCheckbox: true,
    }); // eslint-disable-line
  }

  componentDidMount() {
    this.createInstance();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.data, nextProps.data)) {
      this.Instance.load(nextProps.data);
    }
  }

  render() {
    return (
      <>
        <button onClick={this.load}>load</button>
        <div
          ref={(tree) => {
            this.treeNode = tree;
          }}
          className={this.props.className}
        />
      </>
    );
  }
}

export default Tree;
