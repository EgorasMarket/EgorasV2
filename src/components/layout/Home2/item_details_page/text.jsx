<div className="description_area">
  <div className="description_header">
    <div
      id="descript"
      onClick={changeBg}
      className={
        activeBg == "descript"
          ? "description_click1 description_click1_active"
          : "description_click1"
      }
    >
      Description
    </div>
  </div>

  <div className="description_body">
    <div className="description_table">
      <table class="_3a09a_1e-gU">
        <tbody>
          {spec.map((apple) => (
            <tr>
              {/* <td>Colour</td> */}
              <td>{apple}</td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
    {/* ====== */}
    {/* ====== */}
  </div>

</div>;
