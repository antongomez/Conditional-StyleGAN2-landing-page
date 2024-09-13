import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Github, EnvelopeFill, JournalText } from "react-bootstrap-icons";

import { ZoomableImage } from "./ZoomableImage";

export const App = () => {
  return (
    <Container fluid className="py-0 px-5 bg-dark text-white">
      {/*Hero Section*/}
      <Container
        fluid
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <h1>
          Advanced GAN for Multispectral Image Classification and Generation
        </h1>
        <p className="fw-lighter mt-2">
          A Neural Network that Classifies and Generates Multispectral Images
          from 1 to 5 Channels with Precision
        </p>
        <Container className="d-flex justify-content-center mt-4">
          <Button variant="primary" className="me-2" href="#description">
            Get Started
          </Button>
          <Button
            variant="secondary"
            class="btn btn-outline-secondary ms-2"
            href="https://github.com/antongomez/Conditional-StyleGAN2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Github size={20} className="ms-2 mb-1" />
          </Button>
        </Container>
      </Container>
      <hr />
      {/*Description Section*/}
      <Container fluid id="description" className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} lg={6} className="p-0 pe-lg-5 mb-5 mb-lg-0">
            <h2>Description</h2>
            <p className="fw-lighter mt-2">
              Conditional StyleGAN2 is a Generative Adversarial Network that
              classifies and generates multispectral images from 1 to 5 channels
              with precision using a modified StyleGAN2 architecture. This
              project was developed as a bachelor's thesis at University of
              Santiago de Compostela.
            </p>
            <p className="fw-lighter">
              The network is composed of two subnetworks: a discriminator and a
              generator. The discriminator has an architecture similar to a
              convolutional network. The initial blocks perform convolutional
              operations to reduce the information contained in the images into
              a latent vector of smaller dimensions, and the final block
              consists of a dense layer with as many output neurons as there are
              classes to classify.
            </p>
            <p className="fw-lighter">
              The generator starts from an initial noise tensor. Through its
              blocks, the generator progressively constructs the image by
              performing inverse convolutional operations that increase the
              resolution of the tensor until it reaches the same dimensions as
              the images in the training set.
            </p>
            <p className="fw-lighter">
              To know more details of the netowork read StyleGAN2 paper or my
              thesis.
            </p>
            <Container className="p-0">
              <Button
                variant="primary"
                href="https://arxiv.org/abs/1912.04958"
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                StyleGAN2 <JournalText size={20} className="ms-1 mb-1" />
              </Button>
              <Button
                variant="secondary"
                href="https://nubeusc-my.sharepoint.com/my?id=%2Fpersonal%2Fanton%5Fgomez%5Flopez%5Frai%5Fusc%5Fes%2FDocuments%2FTFG%2FMemoria%2FMemoria%2DTraballo%2DFin%2DDe%2DGrao%2DAnton%2DGomez%2DLopez%2Epdf&parent=%2Fpersonal%2Fanton%5Fgomez%5Flopez%5Frai%5Fusc%5Fes%2FDocuments%2FTFG%2FMemoria&ga=1"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2 text-white"
              >
                Thesis <JournalText size={20} className="ms-1 mb-1" />
              </Button>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="p-0 ps-lg-5 d-flex flex-column">
            <ZoomableImage
              imageSrc="/discriminator-schema.png"
              altText="Discriminator Schema"
              className="flex-column"
            />
            <p className="fw-lighter mt-1 text-center">Discriminator schema</p>
            <ZoomableImage
              imageSrc="/generator-schema.png"
              altText="Discriminator Schema"
              className="flex-column"
            />
            <p className="fw-lighter mt-1 text-center">Generator schema</p>
          </Col>
        </Row>
      </Container>
      <hr />
      {/*Features Section*/}
      <Container fluid id="features" className="bg-dark text-white py-5">
        <h2>Features</h2>
        <Row
          xs={1}
          md={2}
          xl={4}
          className="d-flex justify-content-center align-items-start pt-4"
        >
          <Col md={6} xl={3} className="mb-3 mb-xl-0 d-flex flex-md-column">
            <Col
              xs="auto"
              className="p-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-start me-4 me-md-0"
            >
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <span className="text-primary fs-4">1</span>
              </div>
            </Col>
            <Col className="p-0">
              <h3>Multispectral Classification</h3>
              <p className="fw-lighter">
                The network classifies multispectral images using a modified
                StyleGAN2 architecture. To classify multispectral images, it is
                necessary to preprocess them with a segmentation algorithm and
                calculate the centers of the segmented regions to extract
                patches from each multispectral image.
              </p>
            </Col>
          </Col>
          <Col md={6} xl={3} className="mb-3 mb-xl-0 d-flex flex-md-column">
            <Col
              xs="auto"
              className="p-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-start me-4 me-md-0"
            >
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <span className="text-primary fs-4">2</span>
              </div>
            </Col>
            <Col className="p-0">
              <h3>RGB Classification</h3>
              <p className="fw-lighter">
                The network is also capable of classifying RGB and
                black-and-white images. In these cases, preprocessing with a
                segmentation algorithm is not required, as the network can
                classify the images directly.
              </p>
            </Col>
          </Col>
          <Col md={6} xl={3} className="mb-3 mb-xl-0 d-flex flex-md-column">
            <Col
              xs="auto"
              className="p-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-start me-4 me-md-0"
            >
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <span className="text-primary fs-4">3</span>
              </div>
            </Col>
            <Col className="p-0">
              <h3>Image Generation</h3>
              <p className="fw-lighter">
                At the end of the training and during the training process, the
                network is capable of generating images of the same size as the
                training images. The generated images are similar to the
                training images, but they are not identical.
              </p>
            </Col>
          </Col>
          <Col md={6} xl={3} className="mb-3 mb-xl-0 d-flex flex-md-column">
            <Col
              xs="auto"
              className="p-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-start me-4 me-md-0"
            >
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <span className="text-primary fs-4">4</span>
              </div>
            </Col>
            <Col className="p-0">
              <h3>Adaptative Learning Rate</h3>
              <p className="fw-lighter">
                One of the modifications made to the StyleGAN2 architecture is
                the inclusion of an adaptive learning rate. This modification
                improves the network's convergence during training with respect
                to the classification task.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
      <hr />
      {/*Results Section*/}
      <Container fluid id="results" className="py-5">
        <Container fluid className="text-center mw-xl-60 mb-5">
          <h2>Results</h2>
          <p className="fw-lighter">
            A brief summary of the results obtained with the network is
            presented here. The network was trained on a simple dataset, like
            MNIST, as well as a more complex dataset of multispectral images.
            The results of the network are shown for both classification and
            generation tasks.
          </p>
        </Container>
        <Row
          lg={2}
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <Col
            xs={12}
            lg={6}
            className="px-0 pe-lg-5 mb-5 mb-lg-0 d-flex flex-column align-items-center text-center"
          >
            <h3>Classification results with MNIST</h3>
            <p className="fw-lighter mt-2">
              Some initial experiments were conducted using the MNIST dataset. A
              training set with 59,000 examples and a validation set with 1,000
              examples were used. The classification results were similar to
              those obtained by other networks, with an overall accuracy of{" "}
              <span className="fw-bolder">95.52%</span>.
            </p>
            <Container fluid className="mw-xl-75 px-0">
              <ZoomableImage
                imageSrc="/confusion-matrix-training-set-id-19.png"
                altText="Confusion matrix with MNIST on validation set"
                className=""
              />
            </Container>
            <p className="fw-lighter mt-1">
              Confusion matrix with MNIST on training set
            </p>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="px-0 ps-lg-4 d-flex flex-column align-items-center text-center"
          >
            <h3>Classification results with multispectral images</h3>
            <p className="fw-lighter mt-2">
              The network was also tested with multispectral images. The
              training set contained a variable number of instances, depending
              on the specific multispectral image. Using the multispectral image
              of the Oitaven River, the network achieved an overall accuracy of{" "}
              <span className="fw-bolder">85.09</span>%.
            </p>
            <Container fluid className="mw-xl-75 px-0">
              <ZoomableImage
                imageSrc="/confusion-matrix-validation-set-id-32.png"
                altText="Confusion matrix with MNIST on validation set"
                className=""
              />
            </Container>
            <p className="fw-lighter mt-1">
              Confusion matrix with multispectral images on validation set
            </p>
          </Col>
        </Row>
        <Container
          fluid
          className="d-flex flex-column justify-content-center text-center px-0 mw-xl-60 mb-3"
        >
          <h3>Quality of generated images</h3>
          <p className="fw-lighter mt-2">
            The network is capable of generating images similar to those in the
            training set. The simpler the images in the training set, the better
            the quality of the generated images. Therefore, the quality of the
            generated multispectral images is noticeably lower than that of the
            MNIST dataset images.
          </p>
        </Container>
        <Row md={2} className="justify-content-center mb-3">
          <Col xs={6} md={6} xl={5} xxl={4} className="pe-1 pe-md-2 pe-lg-4">
            <ZoomableImage
              imageSrc="/mnist_fakes.png"
              altText="Generated MNIST images"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Generated MNIST images
            </p>
          </Col>
          <Col xs={6} md={6} xl={5} xxl={4} className="ps-1 ps-md-2 ps-lg-4">
            <ZoomableImage
              imageSrc="/mnist_reals.png"
              altText="Real MNIST images"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">Real MNIST images</p>
          </Col>
        </Row>
        <Row md={2} className="justify-content-center">
          <Col xs={6} md={6} xl={5} xxl={4} className="pe-1 pe-md-2 pe-lg-4">
            <ZoomableImage
              imageSrc="/oitaven_fakes.png"
              altText="Generated Oitaven River multispectral images"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Generated Oitaven River multispectral images
            </p>
          </Col>
          <Col xs={6} md={6} xl={5} xxl={4} className="ps-1 ps-md-2 ps-lg-4">
            <ZoomableImage
              imageSrc="/oitaven_reals.png"
              altText="Real Oitaven River multispectral images"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Real Oitaven River multispectral images
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      {/*Usage Section*/}
      <Container fluid id="usage" className="bg-dark text-white py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} lg={6} className="p-0">
            <img
              src="https://via.placeholder.com/600"
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} lg={6} className="p-0">
            <h2>Usage</h2>
            <p className="fw-lighter mt-2">
              Conditional StyleGAN2 is a neural network that classifies and
              generates multispectral images from 1 to 5 channels with precision
              using a modified StyleGAN2 architecture. This project is a
              collaboration between the University of California, Berkeley and
              the University of California, Los Angeles.
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      {/*Applications Section*/}
      <Container fluid id="applications" className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} lg={6} className="p-0">
            <h2>Applications</h2>
            <p className="fw-lighter mt-2">
              Conditional StyleGAN2 is a neural network that classifies and
              generates multispectral images from 1 to 5 channels with precision
              using a modified StyleGAN2 architecture. This project is a
              collaboration between the University of California, Berkeley and
              the University of California, Los Angeles.
            </p>
          </Col>
          <Col xs={12} lg={6} className="p-0">
            <img
              src="https://via.placeholder.com/600"
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      <hr />
      {/*Contributing Section*/}
      <Container
        fluid
        id="contributing"
        className="py-5 d-flex flex-column align-items-center"
      >
        <h2>Contributing</h2>
        <Row xs={1} md={2} className="mt-4 justify-content-center text-center">
          <Col lg={5} xl={4} className="mb-3 mb-md-0 d-flex flex-column">
            <Button
              variant="transparent"
              href="https://github.com/antongomez/Conditional-StyleGAN2"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Github size={50} className="text-white" />
            </Button>
            <p className="fw-lighter">
              Visit the GitHub repository and submit a Pull Request. We have
              templates available for both bug reports and feature requests!
            </p>
          </Col>
          <Col lg={5} xl={4} className="mb-3 mb-md-0 d-flex flex-column">
            <Button
              variant="transparent"
              href="mailto:antongomez03@gmail.com"
              className="mb-2"
            >
              <EnvelopeFill size={50} className="text-white" />
            </Button>
            <p className="fw-lighter">
              Send me an email if you have any questions or suggestions. I'm
              always happy to help and improve the project!
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      {/*License Section*/}
      <Container
        fluid
        id="license"
        className="py-5 d-flex flex-column align-items-center text-center"
      >
        <h2>License</h2>
        <p className="fw-lighter">
          This project is licensed under GPL-v3 to ensure it remains fully open
          and collaborative. The GPL-v3 license allows anyone to freely use,
          modify, and distribute the code while guaranteeing that any derivative
          works also remain open-source. By adopting this license, the project
          fosters a community-driven environment that emphasizes transparency,
          innovation, and equal access, encouraging continuous contributions and
          ensuring that the spirit of open-source is preserved for future
          developments.
        </p>
      </Container>
    </Container>
  );
};
