package br.com.devmedia.curso.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "cursos",
        indexes = { @Index(
                columnList = "titulo, data_inicio",
                unique = true,
                name = "unique_titulo_dataInicio")
        }
)
public class Curso implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(name = "carga_horaria", nullable = false)
    @Enumerated(EnumType.STRING)
    private CargaHoraria cargaHoraria;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name = "data_inicio")
    private Date dataInicio;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonIgnoreProperties({"curso"})
    @OneToMany(mappedBy = "curso", cascade = CascadeType.ALL)
    private List<Videoaula> videoaulas;

    public Curso() {
        super();
    }

    public Curso(Long id, String titulo, CargaHoraria cargaHoraria, Date dataInicio) {
        this.id = id;
        this.titulo = titulo;
        this.cargaHoraria = cargaHoraria;
        this.dataInicio = dataInicio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public CargaHoraria getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(CargaHoraria cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public List<Videoaula> getVideoaulas() {
        return videoaulas;
    }

    public void setVideoaulas(List<Videoaula> videoaulas) {
        this.videoaulas = videoaulas;
    }

    public void addVideoaula(Videoaula videoaula) {
        if (this.videoaulas == null) {
            this.videoaulas = new ArrayList<>();
        }
        videoaula.setCurso(this);
        this.videoaulas.add(videoaula);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Curso curso = (Curso) o;

        return id != null ? id.equals(curso.id) : curso.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Curso{" +
                "id=" + id +
                '}';
    }
}

