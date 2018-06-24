FROM jupyter/base-notebook
USER root

RUN apt-get update && \
    apt-get install -y --no-install-recommends octave \
        octave-symbolic octave-miscellaneous \
        python-sympy \
        gnuplot ghostscript && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN conda install --quiet --yes \
    'octave_kernel' && \
    conda clean -tipsy && \
fix-permissions $CONDA_DIR
