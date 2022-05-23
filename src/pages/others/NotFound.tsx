import React from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";

export const NotFound = () => {
  return (
    <LayoutProducts>
      <div className="flex flex-col justify-center items-center gap-4 py-2">
        <h1 className="text-4xl font-semibold text-sky-500">404</h1>
        <h1 className="text-4xl font-semibold text-sky-500">
          Página no Encontrada
        </h1>
        <svg
          width="673"
          height="739"
          viewBox="0 0 673 739"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="NotFound">
            <path
              id="Vector"
              d="M467 149.804C420.379 142.364 367.29 138.394 312 138.394C261.399 138.394 212.649 141.714 169.02 147.974C169.03 147.304 169.04 146.634 169.069 145.964C170.226 107.074 186.549 70.1782 214.549 43.1638C242.55 16.1495 280.006 1.15914 318.913 1.39683C357.82 1.63452 395.091 17.0814 422.759 44.4359C450.427 71.7903 466.298 108.882 466.98 147.784C466.99 148.464 467 149.134 467 149.804Z"
              fill="#63D1FF"
            />
            <g id="Group" opacity="0.1">
              <path
                id="Vector_2"
                opacity="0.1"
                d="M337.55 1.34133C316.857 -1.45373 295.808 0.130426 275.766 5.99112C255.724 11.8518 237.138 21.8583 221.211 35.362C205.284 48.8656 192.372 65.5652 183.312 84.3784C174.252 103.192 169.246 123.698 168.619 144.57C168.589 145.24 168.579 145.91 168.569 146.58C181.531 144.72 194.954 143.127 208.734 141.796C210.42 107.025 224.225 73.9407 247.755 48.2849C271.285 22.6292 303.054 6.02064 337.55 1.34133V1.34133Z"
                fill="white"
              />
            </g>
            <path
              id="Vector_3"
              d="M532.18 161.624C510.72 155.806 488.953 151.186 466.98 147.784C430.966 142.203 394.658 138.714 358.24 137.334C343.07 136.714 327.62 136.394 312 136.394C299.62 136.394 287.34 136.594 275.23 136.994C239.706 138.044 204.266 141.038 169.07 145.964C143.016 149.552 117.214 154.782 91.8198 161.624C32.6098 177.994 0 199.934 0 223.394C0 246.854 32.6099 268.794 91.8198 285.164C133.46 296.684 184.8 304.534 240.74 308.134C263.83 309.634 287.7 310.394 312 310.394C336.38 310.394 360.33 309.624 383.49 308.124C434.4 304.834 481.5 298.024 520.92 288.124C521.13 288.064 521.33 288.014 521.54 287.964C524.2 287.304 526.82 286.614 529.41 285.924C530.34 285.664 531.26 285.414 532.18 285.164C532.232 285.143 532.285 285.126 532.34 285.114C533.22 284.874 534.09 284.624 534.96 284.384C536.7 283.884 538.42 283.394 540.11 282.884C540.19 282.864 540.26 282.844 540.33 282.824C541.8 282.384 543.24 281.944 544.67 281.504C545.84 281.134 547 280.774 548.15 280.404C548.99 280.134 549.82 279.864 550.64 279.594C551.24 279.394 551.83 279.204 552.41 279.004C553.2 278.744 553.99 278.474 554.77 278.204C555.1 278.094 555.43 277.984 555.75 277.864C556.5 277.614 557.23 277.354 557.96 277.094C558.75 276.814 559.54 276.524 560.32 276.244C560.97 276.014 561.62 275.774 562.26 275.534C562.8 275.324 563.33 275.124 563.87 274.924C565.34 274.374 566.78 273.804 568.2 273.244C568.91 272.954 569.62 272.674 570.32 272.384C571.01 272.104 571.71 271.814 572.39 271.524C573.51 271.054 574.61 270.584 575.69 270.114C576.21 269.874 576.74 269.644 577.25 269.424C577.64 269.244 578.02 269.074 578.41 268.894C578.69 268.774 578.97 268.644 579.24 268.514C580.25 268.054 581.25 267.584 582.23 267.114C585.99 265.314 589.5 263.474 592.76 261.594C613.21 249.884 624 236.894 624 223.394C624 199.934 591.39 177.994 532.18 161.624ZM531.64 283.244C489.95 294.774 438.47 302.624 382.38 306.194C359.57 307.644 335.99 308.394 312 308.394C288.09 308.394 264.59 307.654 241.85 306.204C185.67 302.644 134.11 294.794 92.3599 283.244C34.0899 267.124 2 245.874 2 223.394C2.00326 221.408 2.25188 219.429 2.74023 217.504C7.83984 197.224 39.21 178.244 92.3599 163.544C117.562 156.755 143.166 151.555 169.02 147.974C204.428 143.02 240.082 140.016 275.82 138.974C287.74 138.584 299.8 138.391 312 138.394C327.41 138.394 342.65 138.704 357.63 139.304C394.26 140.672 430.779 144.178 467 149.804C488.783 153.191 510.363 157.778 531.64 163.544C584.78 178.244 616.14 197.214 621.25 217.484C621.746 219.415 621.998 221.4 622 223.394C622 245.874 589.91 267.124 531.64 283.244V283.244Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              d="M623.43 224.304C623.43 237.664 612.419 250.304 592.759 261.594C589.49 263.474 585.97 265.314 582.229 267.114C581.249 267.584 580.249 268.054 579.24 268.514C578.97 268.644 578.689 268.774 578.41 268.894C578.02 269.074 577.64 269.244 577.25 269.424C576.74 269.644 576.21 269.874 575.689 270.114C574.609 270.584 573.509 271.054 572.39 271.524C571.709 271.814 571.009 272.104 570.319 272.384C569.62 272.674 568.91 272.954 568.2 273.244C566.78 273.804 565.339 274.374 563.87 274.924C563.33 275.124 562.799 275.324 562.259 275.534C561.62 275.774 560.97 276.014 560.319 276.244C559.54 276.524 558.75 276.814 557.959 277.094C557.229 277.354 556.5 277.614 555.75 277.864C555.43 277.984 555.1 278.094 554.77 278.204C553.99 278.474 553.2 278.744 552.41 279.004C551.83 279.204 551.24 279.394 550.64 279.594C549.819 279.864 548.989 280.134 548.149 280.404C547 280.774 545.839 281.134 544.669 281.504C543.24 281.944 541.799 282.384 540.33 282.824C540.259 282.844 540.189 282.864 540.109 282.884C538.419 283.394 536.7 283.884 534.959 284.384C534.089 284.624 533.22 284.874 532.339 285.114C532.285 285.126 532.231 285.143 532.18 285.164C531.259 285.414 530.339 285.664 529.41 285.924C526.83 286.604 524.2 287.294 521.54 287.964C521.33 288.014 521.129 288.064 520.919 288.124C482.569 297.704 435.519 304.684 383.45 308.054C360.64 309.524 336.859 310.304 312.43 310.304C287.78 310.304 263.799 309.514 240.81 308.014C103.569 299.064 1.42969 264.984 1.42969 224.304C1.44049 221.829 1.81779 219.369 2.54932 217.004C2.60938 217.174 2.66943 217.334 2.73975 217.504C17.0093 254.984 118.28 285.274 249.68 292.664C269.81 293.804 290.66 294.394 312 294.394C333.43 294.394 354.359 293.794 374.569 292.654C505.859 285.234 607.03 254.934 621.25 217.484C621.49 216.884 621.7 216.284 621.879 215.684C622.893 218.445 623.418 221.363 623.43 224.304V224.304Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_5"
              d="M91.6696 213.54C75.0269 213.54 57.3389 209.959 57.3389 203.323C57.3389 196.687 75.0269 193.106 91.6696 193.106C108.312 193.106 126 196.687 126 203.323C126 209.959 108.312 213.54 91.6696 213.54ZM91.6696 195.106C72.6166 195.106 59.3389 199.437 59.3389 203.323C59.3389 207.209 72.6166 211.54 91.6696 211.54C110.723 211.54 124 207.209 124 203.323C124 199.437 110.723 195.106 91.6696 195.106V195.106Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_6"
              d="M162.669 260.54C146.027 260.54 128.339 256.959 128.339 250.323C128.339 243.687 146.027 240.106 162.669 240.106C179.312 240.106 197 243.687 197 250.323C197 256.959 179.312 260.54 162.669 260.54ZM162.669 242.106C143.617 242.106 130.339 246.437 130.339 250.323C130.339 254.209 143.617 258.54 162.669 258.54C181.722 258.54 195 254.209 195 250.323C195 246.437 181.722 242.106 162.669 242.106V242.106Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_7"
              d="M531.669 213.54C515.027 213.54 497.339 209.959 497.339 203.323C497.339 196.687 515.027 193.106 531.669 193.106C548.312 193.106 566 196.687 566 203.323C566 209.959 548.312 213.54 531.669 213.54ZM531.669 195.106C512.616 195.106 499.339 199.437 499.339 203.323C499.339 207.209 512.616 211.54 531.669 211.54C550.722 211.54 564 207.209 564 203.323C564 199.437 550.722 195.106 531.669 195.106V195.106Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_8"
              d="M460.669 260.54C444.027 260.54 426.339 256.959 426.339 250.323C426.339 243.687 444.027 240.106 460.669 240.106C477.312 240.106 495 243.687 495 250.323C495 256.959 477.312 260.54 460.669 260.54ZM460.669 242.106C441.616 242.106 428.339 246.437 428.339 250.323C428.339 254.209 441.616 258.54 460.669 258.54C479.722 258.54 493 254.209 493 250.323C493 246.437 479.722 242.106 460.669 242.106V242.106Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_9"
              d="M311.669 282.54C295.027 282.54 277.339 278.959 277.339 272.323C277.339 265.687 295.027 262.106 311.669 262.106C328.312 262.106 346 265.687 346 272.323C346 278.959 328.312 282.54 311.669 282.54ZM311.669 264.106C292.616 264.106 279.339 268.437 279.339 272.323C279.339 276.209 292.616 280.54 311.669 280.54C330.722 280.54 344 276.209 344 272.323C344 268.437 330.722 264.106 311.669 264.106V264.106Z"
              fill="#3F3D56"
            />
            <g id="nino" className="animation__bounce">
              <path
                id="Vector_10"
                d="M336.978 492.717C360.181 492.717 378.99 473.907 378.99 450.704C378.99 427.501 360.181 408.692 336.978 408.692C313.775 408.692 294.966 427.501 294.966 450.704C294.966 473.907 313.775 492.717 336.978 492.717Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_11"
                d="M321.002 478.306L300.555 488.546L306.27 499.958L326.717 489.719L321.002 478.306Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_12"
                d="M308.965 498.8C310.178 496.961 307.185 492.849 302.281 489.615C297.377 486.382 292.419 485.252 291.206 487.091C289.994 488.93 292.986 493.042 297.89 496.275C302.794 499.509 307.753 500.639 308.965 498.8Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_13"
                d="M352.953 478.306L347.238 489.719L367.685 499.958L373.4 488.546L352.953 478.306Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_14"
                d="M376.065 496.275C380.969 493.042 383.961 488.93 382.749 487.091C381.536 485.252 376.578 486.382 371.674 489.615C366.769 492.849 363.777 496.961 364.989 498.8C366.202 500.639 371.161 499.509 376.065 496.275Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_15"
                d="M334.036 454.787C341.966 454.787 348.395 448.358 348.395 440.428C348.395 432.498 341.966 426.069 334.036 426.069C326.106 426.069 319.678 432.498 319.678 440.428C319.678 448.358 326.106 454.787 334.036 454.787Z"
                fill="white"
              />
              <path
                id="Vector_16"
                d="M337.53 437.675C339.391 435.814 339.38 432.785 337.506 430.911C335.631 429.036 332.603 429.026 330.741 430.887C328.88 432.748 328.891 435.777 330.765 437.651C332.64 439.526 335.668 439.537 337.53 437.675Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_17"
                d="M370.119 404.999C370.751 389.446 357.346 376.272 340.178 375.574C323.011 374.877 308.582 386.92 307.95 402.474C307.318 418.027 319.252 421.561 336.419 422.259C353.587 422.956 369.487 420.553 370.119 404.999Z"
                fill="#63D1FF"
              />
              <path
                id="Vector_18"
                d="M394.337 472.703C397.1 470.331 393.215 461.272 385.658 452.469C378.101 443.667 369.735 438.454 366.971 440.826C364.208 443.198 368.094 452.258 375.651 461.06C383.207 469.863 391.574 475.076 394.337 472.703Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_19"
                d="M298.422 461.06C305.979 452.257 309.865 443.198 307.102 440.826C304.338 438.454 295.972 443.666 288.415 452.469C280.858 461.272 276.973 470.331 279.736 472.703C282.499 475.075 290.866 469.863 298.422 461.06Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_20"
                d="M348.516 467.261C348.971 469.758 348.415 472.334 346.97 474.422C345.525 476.51 343.311 477.938 340.813 478.393C338.315 478.847 335.739 478.291 333.651 476.847C331.564 475.402 330.136 473.187 329.681 470.689L329.677 470.671C328.736 465.469 332.758 463.628 337.96 462.686C343.162 461.744 347.574 462.058 348.516 467.261Z"
                fill="white"
              />
            </g>
            <path
              id="Vector_21"
              d="M266 495.394C265.47 495.394 264.961 495.183 264.586 494.808C264.211 494.433 264 493.924 264 493.394V375.394C264 374.864 264.211 374.355 264.586 373.98C264.961 373.605 265.47 373.394 266 373.394C266.53 373.394 267.039 373.605 267.414 373.98C267.789 374.355 268 374.864 268 375.394V493.394C268 493.924 267.789 494.433 267.414 494.808C267.039 495.183 266.53 495.394 266 495.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_22"
              d="M236 601.394C235.47 601.394 234.961 601.183 234.586 600.808C234.211 600.433 234 599.924 234 599.394V513.394C234 512.864 234.211 512.355 234.586 511.98C234.961 511.605 235.47 511.394 236 511.394C236.53 511.394 237.039 511.605 237.414 511.98C237.789 512.355 238 512.864 238 513.394V599.394C238 599.924 237.789 600.433 237.414 600.808C237.039 601.183 236.53 601.394 236 601.394V601.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_23"
              d="M313 530.394C312.47 530.394 311.961 530.183 311.586 529.808C311.211 529.433 311 528.924 311 528.394V410.394C311 409.864 311.211 409.355 311.586 408.98C311.961 408.605 312.47 408.394 313 408.394C313.53 408.394 314.039 408.605 314.414 408.98C314.789 409.355 315 409.864 315 410.394V528.394C315 528.924 314.789 529.433 314.414 529.808C314.039 530.183 313.53 530.394 313 530.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_24"
              d="M284 615.394C283.47 615.394 282.961 615.183 282.586 614.808C282.211 614.433 282 613.924 282 613.394V565.394C282 564.864 282.211 564.355 282.586 563.98C282.961 563.605 283.47 563.394 284 563.394C284.53 563.394 285.039 563.605 285.414 563.98C285.789 564.355 286 564.864 286 565.394V613.394C286 613.924 285.789 614.433 285.414 614.808C285.039 615.183 284.53 615.394 284 615.394V615.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_25"
              d="M325 369.394C324.47 369.394 323.961 369.183 323.586 368.808C323.211 368.433 323 367.924 323 367.394V319.394C323 318.864 323.211 318.355 323.586 317.98C323.961 317.605 324.47 317.394 325 317.394C325.53 317.394 326.039 317.605 326.414 317.98C326.789 318.355 327 318.864 327 319.394V367.394C327 367.924 326.789 368.433 326.414 368.808C326.039 369.183 325.53 369.394 325 369.394V369.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_26"
              d="M225 390.394C224.47 390.394 223.961 390.183 223.586 389.808C223.211 389.433 223 388.924 223 388.394V340.394C223 339.864 223.211 339.355 223.586 338.98C223.961 338.605 224.47 338.394 225 338.394C225.53 338.394 226.039 338.605 226.414 338.98C226.789 339.355 227 339.864 227 340.394V388.394C227 388.924 226.789 389.433 226.414 389.808C226.039 390.183 225.53 390.394 225 390.394V390.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_27"
              d="M399 395.394C398.47 395.394 397.961 395.183 397.586 394.808C397.211 394.433 397 393.924 397 393.394V345.394C397 344.864 397.211 344.355 397.586 343.98C397.961 343.605 398.47 343.394 399 343.394C399.53 343.394 400.039 343.605 400.414 343.98C400.789 344.355 401 344.864 401 345.394V393.394C401 393.924 400.789 394.433 400.414 394.808C400.039 395.183 399.53 395.394 399 395.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_28"
              d="M395 545.394C394.47 545.394 393.961 545.183 393.586 544.808C393.211 544.433 393 543.924 393 543.394V485.394C393 484.864 393.211 484.355 393.586 483.98C393.961 483.605 394.47 483.394 395 483.394C395.53 483.394 396.039 483.605 396.414 483.98C396.789 484.355 397 484.864 397 485.394V543.394C397 543.924 396.789 544.433 396.414 544.808C396.039 545.183 395.53 545.394 395 545.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_29"
              d="M355 596.394C354.47 596.394 353.961 596.183 353.586 595.808C353.211 595.433 353 594.924 353 594.394V508.394C353 507.864 353.211 507.355 353.586 506.98C353.961 506.605 354.47 506.394 355 506.394C355.53 506.394 356.039 506.605 356.414 506.98C356.789 507.355 357 507.864 357 508.394V594.394C357 594.924 356.789 595.433 356.414 595.808C356.039 596.183 355.53 596.394 355 596.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_30"
              d="M363 449.394C362.47 449.394 361.961 449.183 361.586 448.808C361.211 448.433 361 447.924 361 447.394V329.394C361 328.864 361.211 328.355 361.586 327.98C361.961 327.605 362.47 327.394 363 327.394C363.53 327.394 364.039 327.605 364.414 327.98C364.789 328.355 365 328.864 365 329.394V447.394C365 447.924 364.789 448.433 364.414 448.808C364.039 449.183 363.53 449.394 363 449.394Z"
              fill="#CCCCCC"
            />
            <path
              id="Vector_31"
              d="M608.193 700.491C611.056 698.094 607.187 688.759 599.553 679.641C591.918 670.522 583.408 665.073 580.545 667.47C577.683 669.867 581.551 679.202 589.186 688.32C596.821 697.439 605.331 702.888 608.193 700.491Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_32"
              d="M589.42 690.122C596.941 667.557 584.746 643.167 562.181 635.645C539.617 628.124 515.227 640.319 507.705 662.883C500.183 685.448 512.378 709.838 534.943 717.36C557.508 724.881 581.898 712.686 589.42 690.122Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_33"
              d="M566.791 710.302H553.707V733.743H566.791V710.302Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_34"
              d="M540.624 710.302H527.54V733.743H540.624V710.302Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_35"
              d="M555.888 738.105C561.909 738.105 566.791 736.275 566.791 734.016C566.791 731.758 561.909 729.928 555.888 729.928C549.866 729.928 544.984 731.758 544.984 734.016C544.984 736.275 549.866 738.105 555.888 738.105Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_36"
              d="M529.721 737.56C535.742 737.56 540.624 735.729 540.624 733.471C540.624 731.213 535.742 729.382 529.721 729.382C523.699 729.382 518.817 731.213 518.817 733.471C518.817 735.729 523.699 737.56 529.721 737.56Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_37"
              d="M535.04 622.365C538.885 606.878 555.86 597.765 572.954 602.009C590.049 606.254 600.789 622.25 596.943 637.737C593.098 653.224 580.339 653.273 563.245 649.029C546.151 644.784 531.194 637.852 535.04 622.365Z"
              fill="#63d1ff"
            />
            <path
              id="Vector_38"
              d="M519.511 665.747C521.111 662.373 513.697 655.507 502.951 650.411C492.206 645.315 482.198 643.918 480.598 647.291C478.998 650.664 486.412 657.53 497.157 662.627C507.903 667.723 517.911 669.12 519.511 665.747Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_39"
              d="M542.123 681.773C550.053 681.773 556.482 675.345 556.482 667.415C556.482 659.485 550.053 653.056 542.123 653.056C534.193 653.056 527.765 659.485 527.765 667.415C527.765 675.345 534.193 681.773 542.123 681.773Z"
              fill="white"
            />
            <path
              id="Vector_40"
              d="M536.223 667.054C538.866 667.054 541.009 664.911 541.009 662.268C541.009 659.625 538.866 657.482 536.223 657.482C533.579 657.482 531.437 659.625 531.437 662.268C531.437 664.911 533.579 667.054 536.223 667.054Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_41"
              d="M542 703.394C545.314 703.394 548 700.708 548 697.394C548 694.08 545.314 691.394 542 691.394C538.686 691.394 536 694.08 536 697.394C536 700.708 538.686 703.394 542 703.394Z"
              fill="white"
            />
            <path
              id="Vector_42"
              d="M671.531 738.394H435.531C435.266 738.394 435.012 738.289 434.824 738.101C434.637 737.914 434.531 737.659 434.531 737.394C434.531 737.129 434.637 736.874 434.824 736.687C435.012 736.499 435.266 736.394 435.531 736.394H671.531C671.796 736.394 672.051 736.499 672.238 736.687C672.426 736.874 672.531 737.129 672.531 737.394C672.531 737.659 672.426 737.914 672.238 738.101C672.051 738.289 671.796 738.394 671.531 738.394Z"
              fill="#3F3D56"
            />
          </g>
          <defs>
            <clipPath id="clip0_898_93">
              <rect width="672.531" height="738.394" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </LayoutProducts>
  );
};
