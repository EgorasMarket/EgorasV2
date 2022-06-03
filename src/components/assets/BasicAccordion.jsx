import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid, Box } from '@mui/material';
import { numberWithCommas } from '../../static';
import { Link } from 'react-router-dom';

const BasicAccordion = ({ onClick, id, title, data }) => {
  const {
    accountOfficer,
    fullname,
    phoneNumber,
    birthDate,
    secondaryPhoneNumber,
    BVN,
    email,
    gender,
    dateOfBirth,
    branch,
  } = data.customer_details;
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={id}
          id={id}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography>
              Phone Number:
              <a href={'tel:' + phoneNumber}> {phoneNumber}</a>
            </Typography>
            <Typography> Email: {email}</Typography>
            <Typography>
              Total Amount on Savings :
              {numberWithCommas(data.total_savings)}
            </Typography>

            <div className="detail-container">
              <div>
                <div>
                  <h6> Outright Orders: {data.outright.length}</h6>
                </div>

                <h6>
                  {' '}
                  Installment Orders: {data.installment.length}
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Grid item xs={6} md={6}>
                        {data.installment
                          ? data.installment.map(
                              (installment, index) => (
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={installment.id}
                                    id={installment.id}
                                  >
                                    {' '}
                                    {installment.product_name}
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <div>
                                      <Typography>
                                        {' '}
                                        Order ID:{installment.id}
                                      </Typography>
                                      <Typography>
                                        {' '}
                                        Item Amount:
                                        {numberWithCommas(
                                          installment.sum
                                        )}
                                      </Typography>
                                      <Typography>
                                        {' '}
                                        Amount Paid:{' '}
                                        {numberWithCommas(
                                          installment.paidSum
                                        )}
                                      </Typography>
                                      <Typography>
                                        {' '}
                                        Product Category Code :
                                        {
                                          installment.product_category_code
                                        }
                                      </Typography>
                                      {/* <Link to={'track'}>
                                        Link here
                                      </Link> */}
                                      <Link
                                        to={{
                                          pathname: 'track',
                                          order_id: installment.id,
                                        }}
                                      >
                                        Track this order
                                      </Link>
                                      <img
                                        src={installment.product_img}
                                        alt={installment.product_name}
                                      />
                                    </div>
                                  </AccordionDetails>
                                </Accordion>
                              )
                            )
                          : 'no info'}
                      </Grid>
                    </Grid>
                  </Box>
                </h6>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BasicAccordion;
