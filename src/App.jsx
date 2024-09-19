import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Github, EnvelopeFill, JournalText } from "react-bootstrap-icons";

import { ZoomableImage } from "./ZoomableImage";
import { CodeBox } from "./CodeBox";

export const App = () => {
  return (
    <Container fluid className="py-0 px-3 px-md-5 bg-dark text-white mw-100">
      {/*Hero Section*/}
      <Container
        fluid
        className="p-0 vh-100 d-flex flex-column justify-content-center align-items-center text-center mw-lg-75"
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
      <Container fluid id="description" className="py-5 px-0">
        <Row className="d-flex justify-content-center align-items-center mx-0 w-100">
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
      <Container fluid id="features" className="bg-dark text-white py-5 px-0">
        <h2>Features</h2>
        <Row
          xs={1}
          md={2}
          xl={4}
          className="d-flex justify-content-center align-items-start pt-4 mx-0"
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
                calculate the centres of the segmented regions to extract
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
      <Container fluid id="results" className="py-5 px-0">
        <Container fluid className="text-md-center mw-xl-60 mb-5 px-0">
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
          className="d-flex justify-content-center align-items-center mb-5 mx-0"
        >
          <Col
            xs={12}
            lg={6}
            className="px-0 pe-lg-5 mb-5 mb-lg-0 d-flex flex-column align-items-md-center text-start text-md-center"
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
            <p className="fw-lighter mt-1 text-center">
              Confusion matrix with MNIST on training set
            </p>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="px-0 ps-lg-4 d-flex flex-column align-items-center text-start text-md-center"
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
            <p className="fw-lighter mt-1 text-center">
              Confusion matrix with multispectral images on validation set
            </p>
          </Col>
        </Row>
        <Container
          fluid
          className="d-flex flex-column justify-content-md-center text-start text-md-center px-0 mw-xl-60 mb-3"
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
        <Row md={2} className="justify-content-center mb-3 mx-0">
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
        <Row md={2} className="justify-content-center mx-0">
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
      {/* Usage Section */}
      <Container fluid id="usage" className="bg-dark text-white py-5 px-0">
        <h2>Usage</h2>
        <h3>Requirements</h3>
        <p className="fw-lighter">
          To begin, you need to clone the repository from GitHub. Use the
          following command:
        </p>
        <CodeBox>
          git clone https://github.com/antongomez/Conditional-StyleGAN2.git
        </CodeBox>
        <p className="fw-lighter">
          After cloning the repository, create a Conda environment with the
          required packages to run the network. The repository includes a file
          called <ResaltedText>environment.yml</ResaltedText> to streamline this
          process. Run the following command to set up the environment:
        </p>
        <CodeBox>conda env create -f environment.yml</CodeBox>
        <p className="fw-lighter">
          We are currently updating the project's dependencies to support the
          latest package versions. If you'd like to contribute, check{" "}
          <a
            href="https://github.com/antongomez/Conditional-StyleGAN2/issues/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            this issue
          </a>
          .
        </p>
        <p className="fw-lighter">
          <span className="fw-bolder">Note</span>: A GPU with CUDA support is
          required to run the network. All experiments were conducted on a TESLA
          T4 GPU with 16GB of memory.
        </p>
        <h3>Data</h3>
        <Row lg={2} className="mx-0">
          <Col lg={6} xl={6} className="mb-4 mb-lg-0">
            <p className="fw-lighter mt-2">
              For this tutorial, you need to download the multispectral image of
              Pavia University from this{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                OneDrive folder
              </a>
              . Place the files in a folder named{" "}
              <ResaltedText>data/PAVIA</ResaltedText> and make sure the
              filenames are as follows:
            </p>
            <ul className="fw-lighter">
              <li>
                <span className="fw-bolder">pavia_university.raw</span>{" "}
                (Multispectral image)
              </li>
              <li>
                <span className="fw-bolder">pavia_university_gt.pgm</span>{" "}
                (Ground truth)
              </li>
              <li>
                <span className="fw-bolder">pavia_university_seg.raw</span>{" "}
                (Segmented image)
              </li>
              <li>
                <span className="fw-bolder">
                  pavia_university_seg_centers.raw
                </span>{" "}
                (Centers of the segments)
              </li>
            </ul>
            <p className="fw-lighter mt-2">
              The multispectral image of Pavia University contains 5 channels,
              but RGB channels can be extracted to visualize the image in color.
              There are 9 classes in the ground truth image, represented by the
              following colors:
            </p>
            <ol className="fw-lighter">
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Asphalt: raspberry red</span>
                  <div
                    style={{
                      backgroundColor: "#e6194b",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Meadows: green</span>
                  <div
                    style={{
                      backgroundColor: "#3cb44b",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Gravel: yellow</span>
                  <div
                    style={{
                      backgroundColor: "#ffe119",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Trees: blue</span>
                  <div
                    style={{
                      backgroundColor: "#0082c8",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Metal: orange</span>
                  <div
                    style={{
                      backgroundColor: "#f58230",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Bare soil: purple</span>
                  <div
                    style={{
                      backgroundColor: "#911eb4",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Bitumen: light blue</span>
                  <div
                    style={{
                      backgroundColor: "#46f0f0",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Bricks: light purple</span>
                  <div
                    style={{
                      backgroundColor: "#f032e6",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
              <li>
                <Container fluid className="p-0 d-flex align-items-center">
                  <span>Shadows: light yellow</span>
                  <div
                    style={{
                      backgroundColor: "#d2f53c",
                      width: "20px",
                      height: "20px",
                    }}
                    className="d-inline-block rounded-circle ms-2"
                  ></div>
                </Container>
              </li>
            </ol>
            <p className="fw-lighter">
              There are some pixels in the ground truth in black color that
              represent unknown classes. These pixels are not considered in the
              classification task.
            </p>
          </Col>
          <Col lg={6} xl={6} className="">
            <Row md={2} className="justify-content-center mx-0">
              <Col xs={6} md={4} lg={6}>
                <ZoomableImage
                  imageSrc="/pavia_raw.png"
                  altText="Multispectral image of Pavia University"
                  className=""
                />
                <p className="fw-lighter mt-1 text-center">
                  Multispectral image of Pavia University in RGB
                </p>
              </Col>
              <Col xs={6} md={4} lg={6}>
                <ZoomableImage
                  imageSrc="/pavia_gt.png"
                  altText="Ground truth of Pavia University"
                  className=""
                />
                <p className="fw-lighter mt-1 text-center">
                  Ground truth of Pavia University image
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <h3>Training</h3>
        <p className="fw-lighter mt-2">
          Once the environment is set up and the images are downloaded, you can
          train the network with the following command:
        </p>
        <CodeBox>
          python cstylegan2/run.py data/PAVIA --channels=5 --num_train_steps=100
          --evaluate_every=44 --save_every=44 --name=PAVIA
        </CodeBox>
        <p className="fw-lighter mt-2">
          First, the dataset will be loaded, consisting of a high-resolution
          multispectral image of Pavia University. The network uses 32x32 pixel
          patches from the multispectral image, centred on the segments defined
          in the <ResaltedText>pavia_university_seg_centers.raw</ResaltedText>{" "}
          file.
        </p>
        <p className="fw-lighter">
          As the image has 5 channels, the{" "}
          <ResaltedText>--channels=5</ResaltedText> flag specifies this. The
          dataset is split into training and validation sets, with the following
          default split:
        </p>
        <ul className="fw-lighter">
          <li>Training set: 15% of each class</li>
          <li>Validation set: 5% of each class</li>
        </ul>
        <p className="fw-lighter">
          The batch size is set to 64 by default, creating 2837 patches for the
          training set and 960 for the validation set. A smaller training set is
          used to mimic situations with limited data, as seen in the original
          problem involving multispectral images from Galician river basins.
        </p>
        <p className="fw-lighter">
          The network will train for 100 steps, saving a model every epoch (44
          batches). If you modify the batch size and still want to save a model
          per epoch, adjust the number of steps for saving and evaluation by
          dividing the total number of batches by the batch size.
        </p>
        <h3>Evaluation</h3>
        <h4>Image generation</h4>
        <p className="fw-lighter">
          During training, the network generates a mosaic of images every 44
          batches (effectively after each epoch). This mosaic contains 8
          generated images for each of the 9 classes in this classification
          problem. Initially, the generated images will be quite noisy, but as
          training progresses, the quality of the generated images will improve
          significantly.
        </p>
        <Row md={3} className="justify-content-center mx-0">
          <Col xs={12} sm={9} md={4} xl={3}>
            <ZoomableImage
              imageSrc="/epoch_10.png"
              altText="Generated patches in epoch 10"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Generated patches in epoch 10
            </p>
          </Col>
          <Col xs={12} sm={9} md={4} xl={3}>
            <ZoomableImage
              imageSrc="/epoch_100.png"
              altText="Generated patches in epoch 100"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Generated patches in epoch 100
            </p>
          </Col>
          <Col xs={12} sm={9} md={4} xl={3}>
            <ZoomableImage
              imageSrc="/reals_pavia.png"
              altText="Real patches of Pavia University"
              className=""
            />
            <p className="fw-lighter mt-1 text-center">
              Real patches of Pavia University
            </p>
          </Col>
        </Row>
        <p className="fw-lighter">
          After training is complete, you can generate images conditioned on
          specific class labels. The{" "}
          <ResaltedText>cstylegan2/test_G.py</ResaltedText> script in the GitHub
          repository allows you to generate images for each class in the
          dataset. This script accepts two parameters:
        </p>
        <ul className="fw-lighter">
          <li>
            <span className="fw-bolder">name</span>: The name used during
            training, in this case, <span className="fst-italic">PAVIA</span>.
          </li>
          <li>
            <span className="fw-bolder">model</span> (optional): The number of
            the saved model to use. If not specified, the latest saved model
            will be used.
          </li>
        </ul>
        <p className="fw-lighter">
          To run the script and generate images, use the following command:
        </p>
        <CodeBox>python cstylegan2/test_G.py --name=PAVIA</CodeBox>
        <p className="fw-lighter">
          The script will generate 8 images for each class in the dataset. These
          images will be saved in the <ResaltedText>test/PAVIA/G</ResaltedText>{" "}
          directory.
        </p>
        <h4>Classification</h4>
        <p className="fw-lighter">
          For the classification task, the network logs the overall accuracy and
          class-wise accuracy for both the training and validation sets each
          time a model is saved. To identify the best model from the training
          process, you can use the{" "}
          <ResaltedText>select_best_model.py</ResaltedText> script. This script
          analyses the validation log files and selects the model with the
          highest average accuracy.
        </p>
        <CodeBox> python cstylegan2/select_best_model.py --name=PAVIA</CodeBox>
        <p className="fw-lighter">
          The script returns the model number with the highest average accuracy.
          To evaluate this model, use the <ResaltedText>test_D.py</ResaltedText>{" "}
          script, which accepts the following parameters:
        </p>
        <ul className="fw-lighter">
          <li>
            <span className="fw-bolder">folder</span>: The directory where the
            dataset is stored, e.g.,{" "}
            <span className="fst-italic">data/PAVIA</span>.
          </li>
          <li>
            <span className="fw-bolder">name</span>: The name used for training
            the network, e.g., <span className="fst-italic">PAVIA</span>.
          </li>
          <li>
            <span className="fw-bolder">model</span>: The number of the best
            model selected during training.
          </li>
        </ul>
        <p className="fw-lighter">
          To evaluate the best saved model, run the following command:
        </p>
        <CodeBox>
          python cstylegan2/test_D.py data/PAVIA --folder=data/PAVIA
          --name=PAVIA --model=NUMBER_OF_THE_BEST_MODEL
        </CodeBox>
        <p className="fw-lighter">
          The script will output the overall accuracy, average accuracy per
          class, and the accuracy for each individual class.
        </p>
      </Container>
      <hr />
      {/*Applications Section*/}
      <Container fluid id="applications" className="bg-dark text-white py-5">
        <h2>Applications</h2>
        <Row
          xs={1}
          md={2}
          xl={4}
          className="d-flex justify-content-center align-items-start pt-4 mx-0"
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
              <h3>Remote Sensing and Environmental Monitoring</h3>
              <p className="fw-lighter">
                The network could be used for classifying multispectral remote
                sensing images, making it suitable for tasks such as{" "}
                <span className="fw-bolder">land cover classification</span>,
                <span className="fw-bolder">environmental monitoring</span>, and
                <span className="fw-bolder">disaster response</span>. For
                example, it could assist in distinguishing between forests,
                urban areas, and water bodies, or evaluating the effects of
                natural disasters like floods or wildfires.
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
              <h3>Precision Agriculture</h3>
              <p className="fw-lighter">
                The network could be used for{" "}
                <span className="fw-bolder">crop health monitoring</span> and{" "}
                <span className="fw-bolder">weed detection</span> in precision
                agriculture. It can help identify early signs of plant stress or
                disease, enabling farmers to optimize yields. Additionally, the
                network could automate the detection of weeds, supporting more
                efficient herbicide application and promoting sustainable
                farming.
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
              <h3>Urban Planning and Development</h3>
              <p className="fw-lighter">
                The network could be applied to{" "}
                <span className="fw-bolder">urban land use classification</span>{" "}
                and <span className="fw-bolder">infrastructure monitoring</span>{" "}
                by analysing aerial or satellite images. This can assist urban
                planners in mapping urban expansion, monitoring roads and
                infrastructure development, and making decisions for sustainable
                city growth.
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
              <h3>Data Augmentation and Synthetic Image Generation</h3>
              <p className="fw-lighter">
                The network could be used for{" "}
                <span className="fw-bolder">data augmentation</span> by
                generating synthetic images, particularly in cases of imbalanced
                datasets. This allows it to create additional data for minority
                classes, improving performance in tasks like{" "}
                <span className="fw-bolder">training data generation</span> and
                enhancing model accuracy when real-world data is limited.
              </p>
            </Col>
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
        <Row
          xs={1}
          md={2}
          className="mt-4 justify-content-center text-center mx-0"
        >
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

const ResaltedText = ({ children }) => {
  return (
    <span className="fw-bolder text-dark mx-1 px-1 pb-1 bg-light rounded-1">
      {children}
    </span>
  );
};
