import { Alert, Button, Grid } from "@mui/material";
import React, { ElementType, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { whiteSpaceBtweenCapitalized } from "src/utils/Text";
import { TranslateComponent } from "../shared/TranslateComponent";

function FormSections(WrappedComponent: ElementType) {
  const [divs, setDivs]: any = useState([
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);
  const [titles, setTitles]: any = useState([]);
  const itemEls = useRef(new Array());
  const Wrapper = (props: any) => {
    const { t } = useTranslation();
    const formGrups = Object.entries(props.values);
    // const titles = Object.entries(props.values);
    const memoInputs = React.useMemo(() => {
      const handleInputs = (index: number) => {
        // if (index + 1 == formGrups.length) {
        let newArr = [...divs]; // copying the old datas array
        newArr[index] = newArr[index] == "block" ? "none" : "block";
        newArr[index + 1] = newArr[index + 1] == "none" ? "block" : "none";
        setDivs(newArr);
        // }
      };
      return formGrups.map((formGrup: any, index: number) => {
        const typof: string | object = typeof formGrup[1];
        const valueIsObj = typof.toString() == "object";
        const mainGroupKey = formGrup[0];
        const mainGroupVal = formGrup[1];
        const title = t(`${whiteSpaceBtweenCapitalized(mainGroupKey)}`);

        // const title = t(mainGroupKey);
        // const title = t(`${whiteSpaceBtweenCapitalized(mainGroupKey)}`);
        // const title = whiteSpaceBtweenCapitalized(mainGroupKey);
        // const title = "Patient";
        console.log(typeof title, "asdasd", title.length);
        if (valueIsObj) {
          const objGroup = Object.entries(mainGroupVal);

          return (
            <div
              id={`idContainer-${index}`}
              style={{
                display: divs[index],
              }}
              key={index}
            >
              <Alert sx={{ textTransform: "capitalize" }} severity="info">
                {title}
              </Alert>
              <Grid container spacing={3} mb={3} mt={1}>
                {/* Input items  */}
                {objGroup.map((objGroupElement: any, idx: number) => {
                  const secondaryGroupKey = objGroupElement[0];
                  const secondaryGroupVal = objGroupElement[1];
                  const titleObj = t(
                    `${whiteSpaceBtweenCapitalized(secondaryGroupKey)}`
                  );

                  return (
                    <WrappedComponent
                      key={idx}
                      {...props}
                      title={titleObj}
                      objKey={secondaryGroupKey}
                      objValue={secondaryGroupVal}
                    />
                  );
                })}
                {/* Input items */}
              </Grid>
              {!(index + 1 == formGrups.length) && (
                <Button
                  onClick={() => {
                    handleInputs(index);
                  }}
                  variant="contained"
                  color="primary"
                >
                  {t("Continue")}
                </Button>
              )}
            </div>
          );
        } else {
          return (
            <div
              id={`idContainer-${index}`}
              ref={(element) => {
                itemEls.current.push(element);
              }}
              style={{
                display: divs[index],
              }}
              key={index}
            >
              <Alert sx={{ textTransform: "capitalize" }} severity="info">
                {title}
              </Alert>
              <Grid container spacing={3} mb={3} mt={1}>
                <WrappedComponent
                  {...props}
                  title={mainGroupKey}
                  isOneItem={true}
                  objKey={mainGroupKey}
                  objValue={mainGroupVal}
                />
              </Grid>
              {!(index + 1 == formGrups.length) && (
                <Button
                  onClick={() => {
                    handleInputs(index);
                  }}
                  variant="contained"
                  color="primary"
                >
                  {t("Continue")}
                </Button>
              )}
            </div>
          );
        }
      });
    }, []);

    return <>{memoInputs}</>;
  };

  return Wrapper;
}

export default FormSections;
